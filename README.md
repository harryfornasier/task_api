### Overview

A simple API using Node, TypeScript, Prisma, GraphQL with Pothos

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository**
    ```
    git clone https://github.com/harryfornasier/task_api.git
    cd task_api
    ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Set up environment variables**
    - Create a `.env` file in the root directory.
    - Add your database connection string and any other required environment variables.  
      Example for SQLite:
      ```
      DATABASE_URL="file:./dev.db"
      ```

4. **Set up the database**
    - Generate the Prisma client:
      ```
      npx prisma generate
      ```
    - Run migrations to set up your database schema:
      ```
      npx prisma migrate dev --name init
      ```

5. **Start the Application**
   ```
   npm start
   ```
---
