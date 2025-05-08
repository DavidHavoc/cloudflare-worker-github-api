output "worker_url" {
  description = "URL where the Worker is live"
  value       = "https://${var.subdomain_name}.${var.domain_name}"
}
