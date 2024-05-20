import multer from "multer";
import path
 from "path";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/images');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
const UploadMiddleWare = multer({ storage: storage });

export default UploadMiddleWare;