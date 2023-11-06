import express, { response } from 'express';
import mysql from 'mysql'
import cors from 'cors'
import bcrypt, { hash } from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'signup'
})

app.post('/Register', (req, res)=>{
    const sql = "INSERT INTO Login (`name`, `email`, `password`) VALUES (?)";
    
    bcrypt.hash(req.body.password.toString(), salt, (err, hash)=>{
        if(err) return res.json({Error: "Error for hassing password"});
        const values =[
            req.body.name,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if(err) return res.json({Error : "Lỗi khi đưa dữ liệu vào server"});
            return res.json({Status: "Thành công!"})
        })
    })
})

app.post('/Login', (req, res) => {
    const sql = 'SELECT * FROM login WHERE email = ?';
    db.query(sql, [req.body.email], (err, data)=>{
        if(err) return res.json({Error: "Đăng nhập không thành công"});
        if(data.length > 0){
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response)=>{
                if(err) return res.json({Error: "Lỗi không tìm được password"});
                if(response){
                    const name = data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token đăng nhập', token);
                    return res.json({Status: "Thành công!"});
                } else {
                    return res.json({Error: "Password không chính xác"});
                }
            })
       } else {
            return res.json({Error: "Email không tồn tại"});
        }
    })
})

app.listen(8081, () => {
    console.log("Running. ..");
})