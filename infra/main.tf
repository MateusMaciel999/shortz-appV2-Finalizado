# Infraestrutura como Código (IaC) do Shortz.
# Versão mínima: descreve o container da aplicação a partir da imagem publicada no GHCR.
# Uso (local): terraform init && terraform plan -var="image=ghcr.io/mateusmaciel999/shortz-appv2-finalizado:latest"

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

variable "image" {
  description = "Imagem da aplicação (GHCR)"
  type        = string
}

variable "environment_name" {
  description = "Nome do ambiente (staging ou production)"
  type        = string
  default     = "staging"
}

variable "external_port" {
  description = "Porta exposta no host"
  type        = number
  default     = 3000
}

variable "session_secret" {
  description = "Segredo da sessão (vem de GitHub Actions Secrets, nunca versionado)"
  type        = string
  sensitive   = true
  default     = "defina-via-secret"
}

resource "docker_image" "app" {
  name = var.image
}

resource "docker_container" "app" {
  name  = "shortz-${var.environment_name}"
  image = docker_image.app.image_id

  env = [
    "PORT=3000",
    "SESSION_SECRET=${var.session_secret}",
  ]

  ports {
    internal = 3000
    external = var.external_port
  }
}
