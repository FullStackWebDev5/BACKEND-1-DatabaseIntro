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

    - MongoDB Shell (mongosh):
      - Type 'mongosh' command: To connect to MongoDB server
      - Exit: Cntrl + C
      - Commands
        - show dbs: Display all existing DBs
        - use <db_name>: Switch to an existing DB, else if DB does not exist - it will create a new DB
          - db: Current database
          - insertOne: Insert a single document inside a collection (CREATE)
            - Syntax: db.collectionName.insertOne({})
          - insertMany: Insert multiple documents inside a collection (CREATE)
            - Syntax: db.collectionName.insertMany([{}, {}, ...])
          - show collections: Display all collections
          - find: Fetch documents from a collection (READ)
            - Syntax: db.collectionName.find()
            - A 'query' object can be passed as an argument to find method to get specific documents
              - Syntax: db.collectionName.find({ query }), where query is { p1: v1, p2: v2, ... }
          - findOne: Return the first document which matches the query (READ)
          - updateOne: Update a single document in a collection (UPDATE)
            - Syntax: db.collectionName.updateOne({ query }, { $set: { p1: v2, ... }})
          - updateMany: Update multiple documents in a collection (UPDATE)
            - Syntax: db.collectionName.updateMany({ query }, { $set: { p1: v2, ... }})
          - deleteOne: Delete a single document from a collection (DELETE)
            - Syntax: db.collectionName.deleteOne({ query })
          - deleteMany: Delete multiple documents from a collection (DELETE)
            - Syntax: db.collectionName.deleteMany({ query })
          - drop: Drop a collection
            - Syntax: db.collectionName.drop()
        - dropDatabase(): Drop a DB
          - Syntax: db.dropDatabase()


  # References:
    - Client Server DB: https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftv59gzcmx726q7pxl0pl.jpg
    - MongoDB (Windows):
      - MongoDB Community Server: https://www.mongodb.com/try/download/community
        - Open Command Prompt with this path: C:\Program Files\MongoDB\Server\7.0\bin
        - Type 'mongod' command to verify successful installation
      - MongoDB Compass: https://www.mongodb.com/try/download/compass
      - MongoDB Shell: https://www.mongodb.com/try/download/shell
        - Open Command Prompt with this path: C:\Program Files\MongoDB\mongosh-2.1.4-win32-x64\bin
        - Type 'mongosh' command to verify successful installation
        - mongosh commands: https://www.mongodb.com/docs/manual/reference/method

  # Additional notes:
    - If needed, please setup environment variables to access 'mongod' and 'mongosh' commands from anywhere
*/