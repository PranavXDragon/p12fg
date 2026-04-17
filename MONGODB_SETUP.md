# MongoDB Setup Guide

## Quick Start

Your Next.js form application is ready! Follow these steps to connect it to MongoDB.

### Step 1: Create MongoDB Cluster

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up or log in
3. Create a new project
4. Create a new cluster (choose Free tier)
5. Wait for cluster to be deployed (~5-10 minutes)

### Step 2: Create Database User

1. In MongoDB Atlas, go to "Database Access"
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Set username and password
5. Click "Add User"

### Step 3: Get Connection String

1. Go to "Databases"
2. Click "Connect" on your cluster
3. Choose "Drivers" 
4. Select "Node.js"
5. Copy the connection string

Example format:
```
mongodb+srv://username:password@cluster0.mongodb.net/formdb?retryWrites=true&w=majority
```

### Step 4: Configure .env.local

1. Open `.env.local` file in the root directory
2. Replace the placeholder with your actual connection string:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/formdb?retryWrites=true&w=majority
   ```

### Step 5: Whitelist IP Address

1. In MongoDB Atlas, go to "Network Access"
2. Click "Add IP Address"
3. Either add your IP or click "Allow Access from Anywhere"
4. Confirm

### Step 6: Run the Application

```bash
npm run dev
```

Visit http://localhost:3000 and test the form!

## Form Fields Reference

- **Name**: Full name (required)
- **Email**: Valid email address (required)
- **Phone**: Phone number (required)
- **Branch**: Engineering branch:
  - Computer Science
  - Electronics
  - Mechanical
  - Civil
  - Electrical
- **Education**: Education level:
  - Bachelor
  - Master
  - Diploma
  - High School
- **Skills**: Comma-separated skills (e.g., JavaScript, React, Node.js)

## Troubleshooting

### Connection Refused
- Check if MongoDB cluster is running
- Verify IP address is whitelisted
- Check MONGODB_URI format

### Validation Errors
- Ensure all required fields are filled
- Email must be in valid format
- Skills must not be empty

### Build Errors
- Run `npm install` to install dependencies
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

## View Submitted Forms

You can fetch all submitted forms by making a GET request:

```bash
curl http://localhost:3000/api/forms
```

Or in your browser, visit:
```
http://localhost:3000/api/forms
```

## Environment Variables

The application uses these environment variables (set in `.env.local`):

- `MONGODB_URI`: MongoDB connection string

## Next Steps

1. Test form submission with valid data
2. Check MongoDB Atlas to see stored data
3. Customize form fields as needed
4. Deploy to Vercel or your hosting provider

## Useful MongoDB Atlas Links

- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Connection Troubleshooting](https://docs.atlas.mongodb.com/troubleshoot-connection/)
- [Network Access Setup](https://docs.atlas.mongodb.com/security-whitelist/)
