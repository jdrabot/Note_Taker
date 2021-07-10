const fs = require("fs");
let noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(noteData);
    });

    app.post("/api/notes", (req, res) => {
        let note = req.body;
        let noteid = Date.now();

        note.id = noteid;
        noteData.push(note);

        fs.writeFileSync("./db/db.json", JSON.stringify(noteData), (err) => {
            if (err)
                throw (err);
        });

        res.json(noteData);

    });
}