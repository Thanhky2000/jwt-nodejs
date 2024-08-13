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
    try {
        let hassPass = hashUserPassword(password);
        const insertNewUser = await pool.query('INSERT INTO "Users" (email, password, username, createdAt, updatedAt) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *', [email, hassPass, userName]);
        return insertNewUser.rows;
    } catch (err) {
        console.log("check >>", err);
    }

}

const getUserList = async () => {
        try {
            let result = await pool.query('SELECT * FROM Users');
            return result.rows;
        } catch (err) {
            console.log("404", err);
            return [];
        }
}

const updateUser = async (id) => {
    try {
        let result = await pool.query('SELECT * FROM Users WHERE id = $1', [id]);
        return result.rows;
    } catch (err) {
        console.log("404", err);
        return [];
    }
}

const updataInfoUser = async (email, userName, id) => {
    try {
        let result = await pool.query('UPDATE Users SET email = $1, username= $2 WHERE id = $3', [email, userName, id]);
        return result.rows;
    } catch (err) {
        console.log("404", err);
        return [];
    }
}

const deleteUser = async (id) => {
try {
    let result = await pool.query('DELETE FROM Users WHERE id = $1', [id]);
    return result.rows;
} catch (err) {
    console.log("404", err);
    return [];
}
}


module.exports = {
    createNewUser,
    getUserList,
    updateUser,
    deleteUser,
    updataInfoUser,
}



