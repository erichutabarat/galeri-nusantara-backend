import jwt from 'jsonwebtoken';
require('dotenv').config();


const jwtAuth = {
    create(username: string): {token: string}{
        const secret = process.env.SECRET_KEY;
        const payload = { user: username};
        const options = {expiresIn:  "3h"};
        if(!secret){
            throw new Error("Secret Key Missing");
        }
        const token = jwt.sign(payload, secret, options);
        return {
            token: token
        };
    },
    check(token: string): boolean{
        const secret = process.env.SECRET_KEY;
        if(!secret){
            return false;
        }
        try {
            const result = jwt.verify(token, secret);
            return (result) ? true : false;
        } catch (error) {
            return false;
        }
    },
    decode(token: string): string{
        const checkfirst = this.check(token);
        if(!checkfirst){
            return "";
        }
        const result = jwt.decode(token);
        if(result && typeof result !== "string"){
            return JSON.stringify(result);
        }
        return result as string;
    }
};

export default jwtAuth;