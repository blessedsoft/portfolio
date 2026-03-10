variable "region" {
  description = "GCP region"
  type        = string
}

variable "project_name" {
  description = "project identifier used for naming resources"
  type        = string
}

variable "environment" {
  description = "deployment environment"
  type        = string
  default     = "production"
}

variable "domain_name" {
  description = "custom domain for HTTPS certificate"
  type        = string
  default     = ""
}

variable "project_id" {
  description = "GCP project ID"
  type        = string
}