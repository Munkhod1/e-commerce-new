// console.log("Welcome IPI Server");

// odoo serveree uusgeed asaay

import express, {Request, Response} from "express";

// const PORT = process.env.PORT;

const app = express();

app.get("/", (req: Request, res: Response) =>  {
    res.send("Welcome E-Commerce API Server");
});

app.listen(8000, () => {
    console.log(`Сервер localhost:${8000} дээр аслаа`);
});