output "load_balancer_ip" {
  description = "Public IP address of the HTTPS load balancer."
  value       = google_compute_global_address.lb_ip.address
}

output "cdn_backend_bucket" {
  description = "Backend bucket used for Cloud CDN."
  value       = google_compute_backend_bucket.cdn.name
}

output "storage_bucket_name" {
  description = "Name of the Cloud Storage bucket."
  value       = google_storage_bucket.site.name
}

output "storage_bucket_url" {
  description = "gs:// URL of the storage bucket."
  value       = "gs://${google_storage_bucket.site.name}"
}

output "site_url" {
  description = "Public URL of the deployed site."
  value       = var.domain_name != "" ? "https://${var.domain_name}" : "http://${google_compute_global_address.lb_ip.address}"
}