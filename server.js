// required dependencies
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3005

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Starts the server
server.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});