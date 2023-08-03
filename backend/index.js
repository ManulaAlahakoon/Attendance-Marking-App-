import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"attendance"
})


app.get("/", (req, res) => {
    res.json("Conncted")
})


app.get("/people", (req, res) => {
    
    const query = "select * from people_detail";
    db.query(query, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
   
})


app.post("/people", (req, res) => {

    const sqlQuery = "insert into people_detail values (?)";
    const values = ["CST_21_31", "Ravindu", "Galle","0714394229", "A student in UWU"]

    db.query(sqlQuery, [values], (err, data) => {
        if (err) return res.json(err)
        
        return res.json("Data added");
    })
})

app.listen(8800, () => {
    
    console.log("Connected to backend")

})
