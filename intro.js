/*
  # Databases (DB): Permanent Storage
    - Pointers
      - Store data of a particular website
      - Usually connected to the server
      - Faster data retreiveal and storage
    
    - Types
      - Relational DB
        - a.k.a SQL (Structured Query Language)
        - Data is stored in tabular format
          - Tables and Rows: Tables are created for each module, individual records are stores in each row within the tables
        - Works well with structured data
        - Better choice for transactions
        - Examples: MySQL, PostgreSQL, Oracle, etc.
      - Non-relational DB
        - a.k.a NoSQL
        - Data is stored in key-value pairs
          - Collections and Documents: Collections are created for each module, individual records are stores in each documents within the collections
        - Works well with unstructured data
        - Not a better choice for transactions
        - Examples: MongoDB, AWS DynamoDB, Azure CosmosDB etc.

    - MongoDB Compass: UI representation of database
      - Connect to MongoDB server using MongoDB Compass
      - Create a new database
      - Create a new collection (table) within the database
      - CRUD Operations
        - CREATE: Click 'Add data' -> 'Insert document' to add a new document
        - READ: Click on a collection to see all documents
        - UPDATE: Click on a document -> Click on pencil icon to edit document and update the data
        - DELETE: Click on a document -> Click on trash icon to delete document
      - Drop a collection: Delete a collection along with its documents
      - Drop the database: Delete the database along with collections, if any

  # References:
    - Client Server DB: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftv59gzcmx726q7pxl0pl.jpg
    - MongoDB (Windows):
      - MongoDB Community Server: https://www.mongodb.com/try/download/community
        - Open Command Prompt with this path: C:\Program Files\MongoDB\Server\7.0\bin
        - Type 'mongod' command to verify successful installation
      - MongoDB Compass: https://www.mongodb.com/try/download/compass
*/