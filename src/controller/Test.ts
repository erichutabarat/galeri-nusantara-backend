import { Request, Response } from "express";

const Test = (req: Request, res: Response) => {
    res.json({
        message: 'Test Endpoint'
    })
};

export default Test;