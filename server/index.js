import express from 'express' 
import mysql from 'mysql'
import cors from 'cors'

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1212wkr!",  //authentication prob might happen because creating a password can sometime give problems
    database:"health",
})

//authentication didn't work for me for some reason had to do
//ALTER USER 'root'@'localhost' IDENTIFIED BY '1212wkr!' 
//in mysql

//to allow json format request
//automatically parsing josn object
app.use(express.json())

// to allow your frontend file to have access to backend
app.use(cors())


app.get("/", (req, res) => {
    res.json("hello")
})

app.post("/login", (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM user WHERE username = ? AND password = ?", 
    [username, password],(err, result) =>{
        if(err){
            res.send({err: err})
        }
        if(result.length > 0){
            res.send(result)
        }else{
            res.send({message: "wrong combination"})
        }
    })
})

app.post("/register", (req, res) =>{

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO User (username, password) VALUES (?,?)", 
    [username, password],(err, result) =>{
        //console.log(err);
        if(err) return res.json(err)
        return res.json(result)
    })
})


//8800 is the port number
app.listen(3001, ()=>{
    console.log("Connected to backend!!")
}) 