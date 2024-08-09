import bcrypt from 'bcryptjs';
import pg from 'pg';
const salt = bcrypt.genSaltSync(10);


// Cấu hình kết nối với PostgreSQL
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "jwt",
    password: "071052443",
    port: 5432,
  });
  db.connect();

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = (email, password, userName) => {
    let hassPass = hashUserPassword(password);
    const insertNewUser = db.query("INSERT INTO users (email, password, username) VALUES ($1, $2, $3)", [email, hassPass, userName]);
    console.log("check new user >>", insertNewUser);
}

const getUserList = async () => {
   
        let result = await db.query("SELECT * FROM users");
        console.log("check>>", result);
        
        
   
    // const insertNewUser = db.query("SELECT * FROM users");
    // console.log("check new user >>", insertNewUser);
}

module.exports = {
    createNewUser,
    getUserList
}