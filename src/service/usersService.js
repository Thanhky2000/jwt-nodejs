import bcrypt from 'bcryptjs';
import { Pool } from 'pg';
const salt = bcrypt.genSaltSync(10);


// Cấu hình kết nối với PostgreSQL
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "jwt",
    password: "071052443",
    port: 5432,
  });


const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, userName) => {
    let hassPass = hashUserPassword(password);
    const insertNewUser = await pool.query("INSERT INTO users (email, password, username) VALUES ($1, $2, $3)", [email, hassPass, userName]);
    console.log("check new user >>", insertNewUser.rows);
}

const getUserList = async () => {
   
        let result = await pool.query("SELECT * FROM users");
        console.log("check>>", result.rows);
        
        
   
    // const insertNewUser = db.query("SELECT * FROM users");
    // console.log("check new user >>", insertNewUser);
}

module.exports = {
    createNewUser,
    getUserList
}