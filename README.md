# BartoBuild 💪

**BartoBuild** is a personal training and fitness coaching platform built for clients looking to transform their physique through guided programs and expert support. The project showcases a modern frontend, secure AWS-powered backend, and interactive contact flow.

## 🚀 Live Site

👉 [bartobuild.com](https://bartobuild.com)

---

## 📌 Features

- Fully responsive React frontend
- Animated UI elements with scroll effects
- Firebase authentication with optional auto-fill for returning users
- Contact form that:
  - Submits data to an AWS Lambda function
  - Stores entries in DynamoDB
  - Sends messages via AWS SES

---

## 🧰 Tech Stack

### Frontend

- React
- React Router
- Firebase Auth
- CSS Modules

### Backend (Serverless)

- **AWS Lambda** – Handles contact form logic
- **Amazon API Gateway** – Securely exposes Lambda function
- **DynamoDB** – Stores contact submissions
- **AWS SES (Simple Email Service)** – Sends email notifications

### DevOps & Deployment

- **S3 + CloudFront** – Static site hosting with CDN
- **Route 53** – Domain management for [bartobuild.com](https://bartobuild.com)

---
