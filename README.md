# basic_django_react_login_SAFE

## Overview
This project provides a basic, secure login system using Django for the backend and React for the frontend.
It is designed to be a simple starting point for building full-stack applications with secure authentication practices.

## Repository Structure
**File/Folder	Purpose**
backend/	Django backend (APIs, authentication, user management)
frontend/	React frontend (login UI, API interactions)
.DS_Store	MacOS system file (can be ignored)
.gitignore	Files and folders to exclude from version control
README.md	Project overview (this file)

## Features
### Backend (Django)
Secure user authentication (login, logout)
Django REST Framework APIs
JWT token handling

### Frontend (React)
Login page with form handling
API communication with Django backend
Safe error handling and basic validation

## Backend Setup (Django)
### 1. Navigate to backend folder
cd backend
### 2. Install backend dependencies with Poetry
poetry install
### 3. Activate the Poetry shell
poetry shell
### 4. Run Django server
python manage.py runserver

## Frontend Setup (React)
### 1. Navigate to frontend folder
cd frontend
### 2. Install frontend dependencies
npm install
### 3. Run React app
npm start

## Notes
Make sure backend server is running on a port (e.g., localhost:8000) and React frontend is correctly configured to point API requests to that port.
The .DS_Store file can be ignored.
.gitignore is set up to safely ignore environment, build, and sensitive files.

## License
For internal, learning, or research use unless otherwise specified.

