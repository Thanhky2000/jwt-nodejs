// import configViewEngine from "../configs/viewEngine";
import { name } from 'ejs';
import pg from 'pg';

// Cấu hình kết nối với PostgreSQL
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "jwt",
    password: "071052443",
    port: 5432,
  });
  db.connect();

  





const homeHandle = (req, res) => {
    res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userName = req.body.username;
    
    const insertNewUser = db.query("INSERT INTO users (email, password, username) VALUES ($1, $2, $3)", [email, password, userName]);
    console.log("check new user >>", insertNewUser);
    res.send("create user succsess");
}

module.exports = {
    homeHandle,
    handleUserPage,
    handleCreateNewUser,
}