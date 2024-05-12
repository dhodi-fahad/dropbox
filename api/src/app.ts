import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import morgan from "morgan";
import router from "./routes";


const app = express() // New express instance
const port = 3500; // Port number

// Express Configuration
app.use(cors()) //Enable CORS
app.use(helmet()) //Enable Helmet
app.use(morgan('dev')) // Enable Morgan

// Use routes
app.use('/', router)

// Start Express server
app.listen(port, () => {
    // Callback function when server is succesfully started
    console.log(`Server started at http://localhost:${port}`)
})

// Export Express app
export default app