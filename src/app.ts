import server from "./application/server";

const Apps = server;
const port = process.env.PORT || 8080;

Apps.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
})