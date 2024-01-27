# Chat-Now 

Chat-Now is a full-stack realtime chat application built using the MERN stack. This comprehensive application offers a range of API endpoints to perform various tasks, enabling users to engage in one-to-one and group conversations seamlessly. The backend leverages MongoDB Atlas as the cloud database, ensuring scalability and reliability.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Realtime Communication**: Socket.IO
- **Deployment**: Render

## Check Live

Check out the live version of Chat-Now on Render: [Chat-Now Live](https://chat-now-i1et.onrender.com/)

Note- Expect a brief delay (upto 60 seconds) during the spinning up process for incoming requests due to Render's spinning down on idle policy for free deployed projects.

## Features

1. **Authentication**: Users can sign up, log in, and authenticate themselves securely.

![authentication](https://github.com/pantvasu8/Chat-Now/assets/96621003/8b6d5ae1-b5f5-4e23-aadd-13c127790d67)

2. **One-to-One Chat**: Engage in private conversations with other users in real time.

![one to one](https://github.com/pantvasu8/Chat-Now/assets/96621003/33535bb2-b59a-41ac-8920-0c4b73627adf)

3. **Real-Time Chatting with Typing Indicators**: See when others are typing, providing a more dynamic and interactive chatting experience.

![realtime typing indicator](https://github.com/pantvasu8/Chat-Now/assets/96621003/0acbafae-3260-457d-8ff3-6450d4cc627b)

4. **Search User**: Quickly find and connect with other users through a search functionality.

![search user](https://github.com/pantvasu8/Chat-Now/assets/96621003/54ede755-5b55-4fdf-a2c5-98df2604697f)

5. **Group Chat**: Create or join group chats for collaborative discussions.

![group](https://github.com/pantvasu8/Chat-Now/assets/96621003/683c718f-c89b-4841-bd28-ee1d8e7037a7)

6. **Notification**: Receive real-time notifications for new messages or other relevant events.

![notification](https://github.com/pantvasu8/Chat-Now/assets/96621003/c5391b75-cb9a-473b-b6cb-52fab5d93b26)

7. **View Profile**: Access and view user profiles to learn more about your contacts.

![profile](https://github.com/pantvasu8/Chat-Now/assets/96621003/6676eab9-883a-4204-ba0f-4c7d8c673ce2)


## Getting Started

### Clone the project

```bash
git clone https://github.com/pantvasu8/Chat-Now.git
```

### Go to the project directory

```bash
cd mern-chat-app
```

### Install dependencies

```bash
npm install (backend)
cd frontend/
npm install or npm install --legacy-peer-deps (if conflicts occur due to peer dependencies- frontend )
```

### Start the server

```bash
npm start
```

### Start the Client

1. Open a new terminal
2. Navigate to the frontend directory

```bash
cd frontend
```

3. Start the frontend

```bash
npm run start
```

## Environment Variables

Before running the application locally, make sure to set the following environment variables:

- **PORT**: Port on which the server will run.
- **MONGO_URI**: MongoDB connection URI, preferably from MongoDB Atlas.
- **JWT_SECRET**: Secret key for JSON Web Token (JWT) authentication.
- **CLOUDINARY_CLOUD_NAME**: Cloudinary account's cloud name for image uploads.
- **CLOUDINARY_UPLOAD_PRESET**: Cloudinary upload preset.

Note: For Cloudinary variables, you can either directly set them in `frontend/src/Authentication/Signup.js` or use them as environment variables.


Now, the Chat-Now application should be up and running locally. Open your browser and access the application at [http://localhost:3000](http://localhost:3000).

Feel free to explore the various features and functionalities provided by the Chat-Now application.


## Author

- Vasundhara Pant
