locals {
  labels = {
    project     = var.project_name
    environment = var.environment
  }
}

data "google_project" "current" {
  project_id = var.project_id
}

resource "google_storage_bucket" "site" {
  name                        = "${var.project_name}-site"
  location                    = var.region
  uniform_bucket_level_access = true
  force_destroy               = false
  labels                      = local.labels

  versioning {
    enabled = true
  }

  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

resource "google_storage_bucket_iam_member" "lb_reader" {
  bucket = google_storage_bucket.site.name
  role   = "roles/storage.objectViewer"

  # Public read access for static website content.
  member = "allUsers"
}

resource "google_compute_backend_bucket" "cdn" {
  name        = "${var.project_name}-backend"
  bucket_name = google_storage_bucket.site.name
  enable_cdn  = true
}

resource "google_compute_global_address" "lb_ip" {
  name   = "${var.project_name}-lb-ip"
  labels = local.labels
}

resource "google_compute_url_map" "https_url_map" {
  name            = "${var.project_name}-https-map"
  default_service = google_compute_backend_bucket.cdn.self_link
}

resource "google_compute_managed_ssl_certificate" "cert" {
  count = var.domain_name != "" ? 1 : 0
  name  = "${var.project_name}-cert"

  managed {
    domains = [var.domain_name]
  }
}

resource "google_compute_target_https_proxy" "https" {
  count            = var.domain_name != "" ? 1 : 0
  name             = "${var.project_name}-https-proxy"
  url_map          = google_compute_url_map.https_url_map.self_link
  ssl_certificates = [google_compute_managed_ssl_certificate.cert[0].self_link]
  # labels not supported for target HTTPS proxy.
}

resource "google_compute_global_forwarding_rule" "https" {
  count                 = var.domain_name != "" ? 1 : 0
  name                  = "${var.project_name}-https-rule"
  target                = google_compute_target_https_proxy.https[0].self_link
  port_range            = "443"
  load_balancing_scheme = "EXTERNAL"
  ip_address            = google_compute_global_address.lb_ip.address
  labels                = local.labels
}

resource "google_compute_url_map" "http_redirect" {
  count = var.domain_name != "" ? 1 : 0
  name  = "${var.project_name}-http-redirect"

  default_url_redirect {
    https_redirect = true
    strip_query    = false
  }
}

resource "google_compute_target_http_proxy" "http" {
  count   = var.domain_name != "" ? 1 : 0
  name    = "${var.project_name}-http-proxy"
  url_map = google_compute_url_map.http_redirect[0].self_link
  # labels not supported for target HTTP proxy.
}

resource "google_compute_global_forwarding_rule" "http" {
  count                 = var.domain_name != "" ? 1 : 0
  name                  = "${var.project_name}-http-rule"
  target                = google_compute_target_http_proxy.http[0].self_link
  port_range            = "80"
  load_balancing_scheme = "EXTERNAL"
  ip_address            = google_compute_global_address.lb_ip.address
  labels                = local.labels
}
