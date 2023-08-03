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



app.listen(8800, () => {
    
    console.log("Connected to backend")

})
