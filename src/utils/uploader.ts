import Cloudinary from "./cloudinary";

const Uploader = async (imagePath: string) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
    try {
        const result = await Cloudinary.uploader.upload(imagePath, options);
        return result.url;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default Uploader;