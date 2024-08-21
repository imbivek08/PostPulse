# PostPlus MERN Stack Application

This project is a full-stack MERN application developed with Vite for the frontend. The application is split into two main parts: the frontend (`client`) and the backend (`api`).

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
  - [Backend Environment Variables](#backend-environment-variables)
  - [Frontend Environment Variables](#frontend-environment-variables)
- [Running the Application](#running-the-application)

## Project Structure

```plaintext
postplus/
├── api/              # Backend code
├── client/           # Frontend code
├── package.json      # Backend package.json
└── ...
```

## Prerequisites

Ensure you have the following installed on your machine:

Node.js (v14.x or higher)

MongoDB (for the database)

# Setup Instructions

## Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/postplus.git
   cd postplus
   ```
2. Install backend dependencies:
   ```bash
   cd api
   npm install
   ```
3. Create a .env file in the api directory:

SECRET_KEY=your_secret_key_here
DB_URL=your_mongodb_connection_url

## Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd ../client
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the client directory:
   VITE_FIREBASE_API_KEY=your_firebase_api_key_here

## Running the Application

1. Start the backend server:
   in root dir(postplus) :
   ```bash
   npm run dev
   ```

````
2. start the frontend server:
  ```bash
  cd client
  npm run dev
````
