import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import pool from "../configs/database";

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, userName) => {
    try {
        let hassPass = hashUserPassword(password);
        const insertNewUser = await pool.query("INSERT INTO users (email, password, username) VALUES ($1, $2, $3)", [email, hassPass, userName]);
        console.log("check new user >>", insertNewUser.rows);
    } catch (err) {
        console.log("404", err);
    }
    
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