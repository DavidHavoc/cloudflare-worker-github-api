# Cloudflare Worker Deployment with Terraform

This project deploys a serverless Cloudflare Worker at **https://devops.X.com** using Terraform.

## What it does:
- Creates a custom Worker responding "Hello from my Cloudflare Worker!"
- Binds it to the subdomain `devops.X.com`
- Automates DNS setup through Cloudflare.

## How to deploy:
```bash
terraform init
terraform plan
terraform apply
