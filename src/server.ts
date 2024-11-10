import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import UserRouters from '@src/routes/UsersRouters';

dotenv.config();
const app = express();
const upload = multer(); // Configure multer for handling multipart/form-data



// // Add body-parsing middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// // Initialize the router and use it
app.use('/api/user',upload.none(), UserRouters.init());

const PORT = process.env.PORT ;


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
