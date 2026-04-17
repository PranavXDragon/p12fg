# Form Application with Next.js and MongoDB

A modern web application built with Next.js, featuring a form that collects user information (name, email, phone, branch, education level, and skills) and stores it in a MongoDB database.

## Features

- **Next.js 16+** with TypeScript
- **MongoDB** integration using Mongoose ODM
- **Server-side API** for form submissions
- **Client-side validation** and error handling
- **Tailwind CSS** for styling
- **Responsive design** with mobile support

## Prerequisites

Before you start, make sure you have:
- Node.js (v18 or higher)
- npm or yarn
- A MongoDB cluster (MongoDB Atlas or local MongoDB)

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. MongoDB Setup

1. **Create a MongoDB Cluster:**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create a free account
   - Create a new cluster
   - Create a database user with username and password

2. **Get Connection String:**
   - In MongoDB Atlas, click "Connect" on your cluster
   - Choose "Drivers" → "Node.js"
   - Copy the connection string

3. **Configure Environment Variables:**
   - Open `.env.local` file
   - Replace `username` and `password` with your MongoDB credentials
   - Replace `cluster0` with your actual cluster name
   - Example:
     ```
     MONGODB_URI=mongodb+srv://myuser:mypassword@mycluster.mongodb.net/formdb?retryWrites=true&w=majority
     ```

### 3. Run the Application

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── forms/
│   │       └── route.ts          # API route for form submissions
│   ├── page.tsx                  # Home page
│   └── layout.tsx
├── components/
│   └── FormComponent.tsx         # Main form component
├── lib/
│   └── mongoose.ts               # MongoDB connection logic
├── models/
│   └── Form.ts                   # Mongoose form schema
├── .env.local                    # Environment variables
└── package.json
```

## Form Fields

- **Name**: User's full name (required)
- **Email**: Valid email address (required)
- **Phone**: Phone number (required)
- **Branch**: Engineering branch (CS, Electronics, Mechanical, Civil, Electrical)
- **Education**: Education level (Bachelor, Master, Diploma, High School)
- **Skills**: Comma-separated list of skills (required)

## API Endpoints

### POST /api/forms
Submit a new form entry

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "branch": "Computer Science",
  "education": "Bachelor",
  "skills": ["JavaScript", "React", "Node.js"]
}
```

**Response:**
```json
{
  "message": "Form submitted successfully",
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-04-18T10:00:00.000Z"
  }
}
```

### GET /api/forms
Retrieve all submitted forms

**Response:**
```json
{
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "branch": "Computer Science",
      "education": "Bachelor",
      "skills": ["JavaScript", "React", "Node.js"],
      "createdAt": "2024-04-18T10:00:00.000Z"
    }
  ]
}
```

## Development

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## Troubleshooting

### MongoDB Connection Error
- Verify your connection string in `.env.local`
- Ensure your MongoDB cluster is running
- Check if your IP address is whitelisted in MongoDB Atlas (Network Access)
- Make sure the database user has proper permissions

### Form Submission Errors
- Check browser console for error messages
- Verify all required fields are filled
- Check email format validation
- Ensure MongoDB is connected before submitting

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM for Node.js
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - For form state management

## License

MIT
