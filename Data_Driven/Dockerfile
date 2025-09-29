FROM python:3.11-slim

# Métadonnées
LABEL maintainer="Dolibarr BTP Team"
LABEL description="Système Data-Driven pour Dolibarr BTP avec IA/ML"

# Variables d'environnement
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONPATH=/app

# Installation des dépendances système
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    default-libmysqlclient-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Création utilisateur non-root
RUN useradd --create-home --shell /bin/bash app

# Répertoire de travail
WORKDIR /app

# Copie des requirements et installation
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copie du code source
COPY . .

# Création des répertoires nécessaires
RUN mkdir -p logs data/lake models && \
    chown -R app:app /app

# Bascule vers utilisateur non-root
USER app

# Point d'entrée par défaut
CMD ["python", "src/main.py", "status"]

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD python src/main.py status || exit 1