# easystore: AI-Powered Microservices E-Commerce

A modern, high-performance e-commerce platform built with **Spring Boot 4 (Java 25)** and **React 19**.

## Architecture Overview

The system follows a microservices architecture with the following components:

- **Frontend (`easystore-ui`)**: React 19 SPA with Tailwind CSS 4, using a feature-based folder structure.
- **API Gateway (`api-gateway`)**: Spring Cloud Gateway for routing and cross-cutting concerns.
- **Product Service (`product-service`)**: Manages product catalog and inventory.
- **Contact Service (`contact-service`)**: Handles customer inquiries and feedback.
- **AI Service (`ai-service`)**: Provides AI-powered features using Spring AI and Ollama.
- **Core Common (`core-common`)**: Shared library for internal DTOs, auditing, and global exception handling.
- **Service Discovery**: HashiCorp Consul for dynamic service registration and discovery.

## Tech Stack

- **Backend**: Spring Boot 4, Java 25 (with Virtual Threads enabled), Spring Cloud 2025+, Spring AI.
- **Frontend**: React 19, Vite, Tailwind CSS 4, React Router 7.
- **Infrastructure**: Docker, Consul.

## Getting Started

### Prerequisites
- JDK 25
- Node.js 20+
- Docker & Docker Compose

### Step 1: Start Infrastructure
```bash
cd easystore
docker compose up -d
```

### Step 2: Build & Run Backend
```bash
cd easystore
./mvnw clean install
# Run individual services, e.g.:
java -jar product-service/target/product-service-0.0.1-SNAPSHOT.jar
```

### Step 3: Run Frontend
```bash
cd easystore-ui
npm install
npm run dev
```

## Features & Improvements
- **Future-Proof**: Specifically tuned for Spring Boot 4 and React 19.
- **Scalable**: Feature-based frontend organization for large-scale development.
- **High Performance**: Leverages Java 25 Virtual Threads for efficient concurrency.
- **Standardized**: Unified API response and error handling patterns across all services.
