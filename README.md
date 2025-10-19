CRUD API with Express.js & MongoDB

A simple RESTful API for managing users, built with Express.js and MongoDB. Supports Create, Read, Update, Delete (CRUD) operations.

Features

Create a new user

Get all users or a single user by email

Update a user

Delete a single user or all users

Uses JWT authentication for protected routes (optional)

Prerequisites

Node.js
 (v14+ recommended)

MongoDB
 (local or Atlas cloud)

npm

Installation

Clone the repository:

git clone https://github.com/your-username/express-mongodb-crud-api.git
cd express-mongodb-crud-api


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/usersDB
JWT_SECRET=your_jwt_secret


Replace MONGO_URI with your MongoDB connection string and JWT_SECRET with a secure random string.

Running the Project
Start the server
npm start


Server will run at: http://localhost:5000

API base URL: http://localhost:5000/api/v1/users

For development (auto-reload with nodemon)
npm run dev

API Endpoints
Method	Endpoint	Description
GET	/api/v1/users	Get all users
GET	/api/v1/users/:email	Get a user by email
POST	/api/v1/users	Create a new user
PUT	/api/v1/users/:email	Update a user by email
DELETE	/api/v1/users/:email	Delete a user by email
DELETE	/api/v1/users/all	Delete all users (protected)
Notes

Password hashing is recommended using bcrypt before storing in the database.

JWT authentication can be added to protect sensitive routes (like delete all).

Emails are unique; attempting to create a user with an existing email will return an error.

Example Requests
Create a user
POST /api/v1/users
Content-Type: application/json

{
  "name": "Ahmad",
  "email": "ahmad@gmail.com",
  "password": "12345"
}

Get all users
GET /api/v1/users

Delete all users (with JWT + password)
DELETE /api/v1/users/all
Authorization: Bearer <token>
Content-Type: application/json

{
  "password": "yourpassword"
}

License

This project is licensed under the MIT License.