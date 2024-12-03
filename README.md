# Job Portal

A feature-rich job portal application built with **Java** and **Spring Boot** and **React** with **Tailwind CSS**. This application allows job seekers to explore job opportunities and enables employers to post and manage job listings.

## Features

- **Job Management**: Add, update, and delete job postings.
- **Search Functionality**: Find jobs by criteria like title, company, or location.
- **User Roles**: Separate views for job seekers and employers.
- **RESTful APIs**: Well-structured APIs for seamless front-end and back-end integration.
- **Exception Handling**: Robust error handling for invalid inputs or actions.
- **Database Integration**: Persistent storage using PostgreSQL (or the database of your choice).

## Tech Stack

### Backend:

- **Java**
- **Spring Boot**
- **Hibernate / JPA**
- **PostgreSQL**

### Frontend (Optional - Add if applicable):

- **React**
- **Tailwind CSS**

### Build Tools:

- **Maven**

## Installation and Setup

### Prerequisites

- Java JDK (11 or later)
- PostgreSql Database
- Maven (for dependency management)
- Node.js (for the frontend setup)
- Git (for cloning the repository)

### Steps to Set Up Locally

1. **Clone the Repository**
   `git clone https://github.com/<your-username>/JobPortal.git`
   `cd job-portal`
2. **Set Up the Database**
   - Create a new PostgreSQL database.
   - Update the `application.properties` file with your database credentials.
3. **Build and Run the Backend**
   - Navigate to the backend directory (`cd backend`) and
   - Run `mvn clean install` to build the project.
   - Run `mvn spring-boot:run` to start the application.
4. **Optional: Set Up the Frontend**
   - Navigate to the frontend directory (`cd frontend`) and
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server.
