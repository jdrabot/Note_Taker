// required dependencies
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3005

// Used to serve the files in the public directory
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
require("./routes/APIRoutes")(app);
require("./routes/HTMLRoutes")(app);


// Starts the server
app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`);
});