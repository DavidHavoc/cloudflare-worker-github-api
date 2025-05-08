variable "cloudflare_api_token" {
  description = "API Token for Cloudflare access"
  type        = string
}

variable "cloudflare_zone_id" {
  description = "Zone ID of the domain"
  type        = string
}

variable "domain_name" {
  description = "Main domain (example: myportfolio.com)"
  type        = string
}

variable "subdomain_name" {
  description = "Subdomain you want to bind (example: devops)"
  type        = string
}

variable "worker_name" {
  description = "Name of your worker script"
  type        = string
}
