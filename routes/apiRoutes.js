const jsonDataBase = require('../db/db.json');
let db = [];
db.push(jsonDataBase);

module.exports = (app) => {
    
    // get route for api/notes
    app.get("/api/notes", (req, data) => {
        return data.json(db);
    });

    // post route for api/notes 
    app.post("/api/notes", (req, data) => {
        const id = (db.length + 1).toString();
        
        const newData = {
            ...req.body,
            id: id
        };
        
        db.push(newData);
        
        data.json(db);
    });
// Deletes notes from the array using filter method
    app.delete("/api/notes/:id", (req, data) => {

       const id = (req.params.id).toString();
       const test=db.filter(x => {return x.id != id });
        db = test;
        return data.json(db);
    });
}
