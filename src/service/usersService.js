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
    } catch (err) {
        console.log("404", err);
    }
    
}

const getUserList = async () => {
        try {
            let result = await pool.query("SELECT * FROM users");
            return result.rows;
        } catch (err) {
            console.log("404", err);
            return [];
        }
}

const deleteUser = async (id) => {
//    ("DELETE FROM users WHERE id = 8");
try {
    let result = await pool.query("DELETE FROM users WHERE id = $1", [id]);
    return result.rows;
} catch (err) {
    console.log("404", err);
    return [];
}
   
   
}


module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
}