# Fitness Tracker API

A RESTful API built with Node.js, Express, and MongoDB for tracking fitness activities, such as workouts and meals. The Angular frontend enables users to manage their profiles and track progress over time.

## Features
- User authentication and profile management.
- CRUD operations for logging workouts, exercises, and meals.
- Generate reports for weekly and monthly progress.
- Responsive frontend using Angular.
- Backend with Express.js and MongoDB for data storage.

## Tech Stack
- **Frontend**: Angular, Angular Material (for UI components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT) for secure login

## Prerequisites
- Node.js and npm installed.
- MongoDB instance (local or cloud).
- Angular CLI installed globally.

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Nuraj250/fitness-tracker-api.git
cd fitness-tracker-api
```

### 2. Install dependencies for the backend
```bash
cd server
npm install
```

### 3. Create a `.env` file in the `server` directory
Add the following environment variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the backend server
```bash
npm start
```

### 5. Install dependencies for the frontend
Open a new terminal window and run:
```bash
cd client
npm install
```

### 6. Serve the Angular frontend
```bash
ng serve
```

The Angular app will run on `http://localhost:4200`, and the backend server will run on `http://localhost:5000`.

## Usage
1. Register or log in to your account.
2. Create, view, edit, or delete workout logs, exercises, and meal entries.
3. View weekly or monthly reports for your progress.

## Project Structure
```
fitness-tracker-api/
├── server/                 # Node.js/Express backend
│   ├── models/             # Mongoose models for User, Workout, Meal
│   ├── routes/             # API routes for authentication, workouts, meals
│   ├── .env                # Environment variables for server
│   └── index.js            # Entry point for the server
├── client/                 # Angular frontend
│   ├── src/
│   │   ├── app/            # Angular components and services
│   │   ├── environments/   # API URL configuration
│   │   └── main.ts         # Entry point for the Angular app
├── README.md               # Project documentation
```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Express Documentation](https://expressjs.com/)
- [Angular Documentation](https://angular.io/docs)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/introduction)
