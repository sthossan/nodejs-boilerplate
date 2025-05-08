# User Service

This is a backend service for managing user authentication, profiles, and roles. It is built using Node.js, Express, and MongoDB.

## Installation

Follow these steps to set up and run the project:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables (update the values as needed):

     ```env
     PORT=5000
     MONGODB_USER=<user>
     MONGODB_PASSWORD=<password>
     MONGODB_HOST=localhost
     MONGODB_PORT=27017
     MONGODB_DB=<DB_Name>

     FRONT_END=http://localhost:3000

     MSSQL_USER=your_user
     MSSQL_PASSWORD=your_pass
     MSSQL_DB=userdb
     MSSQL_HOST=localhost

     JWT_SECRET=your_jwt_secret
     JWT_ISSUER=<issuer>
     JWT_AUDIENCE=<audienc>
     JWT_EXPIRES_IN=1h
     JWT_ALGORITHM=HS256
     ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Access the service at `http://localhost:5000`.

---

## Project Structure

The project is organized as follows:

```
src/
│
├── config/
│   ├── db.js               # MongoDB connection configuration
│   └── sql.config.js       # SQL Server connection configuration
│
├── models/
│   └── user.model.js       # User schema and validation
│
├── controllers/
│   ├── auth.controller.js  # Authentication-related controllers
│   └── profile.controller.js # Profile-related controllers
│
├── services/
│   ├── auth.service.js     # Business logic for authentication
│   └── profile.service.js  # Business logic for profiles
│
├── routes/
│   ├── auth.routes.js      # Routes for authentication
│   ├── profile.routes.js   # Routes for profiles
│   └── index.js            # Main router entry point
│
├── middlewares/
│   ├── auth.middleware.js  # Middleware for authentication
│   ├── check.role.middleware.js # Middleware for role-based access control
│   └── error.middleware.js # Global error handling middleware
│
├── utils/
│   ├── constants.js        # Constants for HTTP status codes, messages, and roles
│   ├── jwtHandler.js       # Utility for JWT generation and verification
│   ├── logger.js           # Logger utility
│   ├── responseHandler.js  # Utility for sending success and error responses
│   └── validation.js       # Middleware for request validation
│
└── app.js                  # Main application entry point
```

---

## Middleware

### 1. `auth.middleware.js`

- Verifies the JWT token in the `Authorization` header.
- Attaches the decoded user information to the `req` object.

### 2. `check.role.middleware.js`

- Ensures the user has the required role(s) to access a route.

### 3. `error.middleware.js`

- Handles errors globally and sends a standardized error response.

---

## Utils

### 1. `constants.js`

- Contains reusable constants such as HTTP status codes, messages, and user roles.

### 2. `jwtHandler.js`

- Provides functions to generate and verify JWT tokens.

### 3. `logger.js`

- Logs messages to the console with different levels (info, warn, error).

### 4. `responseHandler.js`

- Simplifies sending success and error responses.

### 5. `validation.js`

- Middleware for validating request bodies using Joi schemas.

---

## Features

- User registration and login with JWT-based authentication.
- Role-based access control for protected routes.
- Profile management (view and update).
- Centralized error handling and logging.

---

## License

This project is licensed under the ISC License.
