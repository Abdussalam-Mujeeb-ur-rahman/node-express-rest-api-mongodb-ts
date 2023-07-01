# Project: CRUD API with Express, TypeScript, and MongoDB
This project is a CRUD (Create, Read, Update, and Delete) API built using Express.js, TypeScript, and MongoDB. The API provides a simple way to create, read, update, and delete data in a MongoDB database.

## Getting Started

Below are instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine
- MongoDB installed on your machine
- A basic understanding of TypeScript and JavaScript

### Installing

Clone the repository to your local machine:
```
git clone https://github.com/Abdussalam-Mujeeb-ur-rahman/node-express-rest-api-mongodb-ts
cd node-express-rest-api-mongodb-ts

```

Install necessary dependencies:`npm install`

## Running the application
To start the application, run: `npm start`.
The application runs on http://localhost:5000 by default.

## API Endpoints
The API exposes the following endpoints:
- GET /: Get homepage
- POST /auth/signup: Create user
   - request body:  
   `
{
  "name": "abdussalam",
  "email": "abdussalam@gmail.com",
  "password": "123456"
} 
`
- POST /auth/login: Login user
   - request body: 
   `
   {
  "name": "abdussalam",
  "email": "abdussalam@gmail.com",
  "password": "123456"
}
`
- GET /user/getAllUsers: Get all users (only logged in users)
- DELETE /user/deleteUser/:id: Delete user (only owners)
- PATCH /user/updateUser/:id: Update user (only owners)

## Built With

- Express.js - Fast, unopinionated, minimalist web framework for Node.js
- TypeScript - A statically typed superset of JavaScript that compiles to plain JavaScript
- MongoDB - A source-available cross-platform document-oriented database program

## Contact

For any questions, feel free to reach out to me at mjbabdussalam@gmail.com