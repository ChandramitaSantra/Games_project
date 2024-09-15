# Game CRUD API

This project provides a backend service for managing games. It allows users to perform CRUD (Create, Read, Update, Delete) operations on game objects via REST APIs. The service is built using Node.js, Express, and MongoDB, and is documented with Swagger for easy interaction.

## Features

- Create a new game
- Read a single game or all games
- Update an existing game
- Delete a game
- Swagger API documentation

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB interaction)
- Swagger (for API documentation)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ChandramitaSantra/CRUD.git
    cd CRUD
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the following environment variables:

    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the server:

    ```bash
    npm start
    ```

    The server will run on `http://localhost:5000`.

5.## API Documentation

The API is documented using Swagger. You can access the Swagger UI at the following URL after starting the server:

- [Swagger UI](http://localhost:5000/api-docs)

## Available Endpoints

### Game Schema

```json
{
  "id": "string",
  "name": "string",
  "url": "string",
  "author": "string",
  "publishedDate": "string (date)"
}
## Available Endpoints

# Game Management API

## API Endpoints

### 1. Create a Single Game

- *URL:* /api/games
- *Method:* POST
- *Request Body:*

    json
    {
      "name": "string",
      "url": "string",
      "author": "string",
      "publishedDate": "YYYY-MM-DD"
    }
    
- *Response:* 201 Created

### 2. Get All Games

- *URL:* /api/games
- *Method:* GET
- *Response:*

    json
    [
      {
        "id": "603eeb4b5e39fb00171adf6c",
        "name": "The Legend of Zelda",
        "url": "https://example.com/zelda",
        "author": "Nintendo",
        "publishedDate": "1986-02-21"
      }
    ]
    

### 3. Get a Single Game by ID

- *URL:* /api/games/{id}
- *Method:* GET
- *Response:* 200 OK

### 4. Update a Game by ID

- *URL:* /api/games/{id}
- *Method:* PUT
- *Request Body:*

    json
    {
      "name": "string",
      "url": "string",
      "author": "string",
      "publishedDate": "YYYY-MM-DD"
    }
    
- *Response:* 200 OK

### 5. Delete a Game by ID

- *URL:* /api/games/{id}
- *Method:* DELETE
- *Response:* 200 OK

## Frontend Setup

### Installation

1. Navigate to the frontend folder:

    bash
    cd ../frontend
    

2. Install dependencies:

    bash
    npm install
    

3. Start the frontend:

    bash
    npm start
    

The frontend will run on [http://localhost:3000](http://localhost:3000)
    

