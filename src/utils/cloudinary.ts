import { v2 as cloudinary } from 'cloudinary';
require('dotenv').config();

const Cloudinary = cloudinary;
Cloudinary.config({ 
    cloud_name: process.env.cloudinary_name, 
    api_key: process.env.cloudinary_api_key, 
    api_secret: process.env.cloudinary_api_secret,
    secure: true 
});

export default Cloudinary;