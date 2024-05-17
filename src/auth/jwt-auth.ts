import jwt from 'jsonwebtoken';
require('dotenv').config();

const jwtAuth = {
    create(username: string): string{
        const secret = process.env.SECRET_KEY;
        const payload = { user: username};
        const options = {expiresIn:  "3h"};
        if(!secret){
            throw new Error("Secret Key Missing");
        }
        const token = jwt.sign(payload, secret, options);
        return token;
    },
    check(){

    }
};

export default jwtAuth;