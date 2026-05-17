# MyFit API

A RESTful API built with Node.js, Express, and MongoDB to power the MyFit health tracking mobile application.

## Tech Stack

- **Node.js** with **Express.js**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **JWT** — JSON Web Token authentication
- **bcryptjs** — password hashing
- **CORS** — cross-origin resource sharing
- **dotenv** — environment variables management

## Architecture

MVC-inspired architecture with service layer:
src/
features/ # Feature modules (auth, meals, workout)
auth/
auth.controller.ts # Handle HTTP requests/responses
auth.service.ts # Business logic
auth.model.ts # MongoDB schema
auth.router.ts # Route definitions
auth.types.ts # TypeScript interfaces
middleware/ # JWT authentication middleware
config/ # Database connection

## Getting Started

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

## Environment Variables

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000

## Frontend

This API powers the [MyFit App](https://github.com/JacopoCarrozzo/my-fit-app-frontend) React Native application.
