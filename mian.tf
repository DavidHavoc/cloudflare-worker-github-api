terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "cloudflare_worker_script" "worker" {
  name    = var.worker_name
  content = file("${path.module}/worker-script.js")
}

resource "cloudflare_worker_route" "worker_route" {
  zone_id     = var.cloudflare_zone_id
  pattern     = "${var.subdomain_name}.${var.domain_name}/*"
  script_name = cloudflare_worker_script.worker.name
}

resource "cloudflare_record" "worker_dns" {
  zone_id = var.cloudflare_zone_id
  name    = var.subdomain_name
  type    = "CNAME"
  value   = var.domain_name
  proxied = true
}
