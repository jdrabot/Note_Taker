// required dependencies
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3005

// Used to serve the files in the public directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
require("./routes/apiRoutes")(app);
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// require("./routes/htmlRoutes")(app);


// Starts the server
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});