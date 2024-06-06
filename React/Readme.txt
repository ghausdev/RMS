SDA Project ReadMe
Project Overview
This project is a Software Development Academy (SDA) application with a frontend developed using React, a backend using Java Spring Boot REST API, and a MySQL database. The project aims to manage students, courses, and other academy-related functionalities.

SDA-Project/
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
├── database/
│   ├── schema.sql
│   └── data.sql
└── README.md
Prerequisites
Node.js (for the frontend)
Java JDK 11+ (for the backend)
Apache Maven (for building the backend)
MySQL Server (for the database)
Setup Instructions
Backend Setup
Navigate to the backend directory:

bash
Copy code
cd SDA-Project/backend
Build the project using Maven:

bash
Copy code
mvn clean install
Configure MySQL database:

Create a MySQL database named sda_database.
Update the src/main/resources/application.properties file with your MySQL credentials:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/sda_database
spring.datasource.username=your-username
spring.datasource.password=your-password
Run the Spring Boot application:


mvn spring-boot:run
Frontend Setup
Navigate to the frontend directory:


cd ../frontend
Install the dependencies:

bash
npm install
npm run dev
Start the React development server:


npm start
Database Setup
Initialize the database schema and data:
Navigate to the database directory:


cd ../database
Run the schema and data scripts using a MySQL client or command line:
sql
Running the Application
Ensure that the backend server is running.
Start the frontend development server.
Open your browser and navigate to http://localhost:3000.
API Documentation
The backend API documentation is available at http://localhost:8080/ once the Spring Boot application is running.