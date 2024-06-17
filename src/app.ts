import server from "./application/server";
import https from "https";
import fs from "fs";

const Apps = server;
const port = process.env.PORT || 443;

// Paths to the SSL certificate and key files
const sslOptions = {
    key: fs.readFileSync('../ssl/selfsigned.key'),
    cert: fs.readFileSync('../ssl/selfsigned.crt')
};

https.createServer(sslOptions, Apps).listen(port, () => {
    console.log(`Server running on https://127.0.0.1:${port}`);
});