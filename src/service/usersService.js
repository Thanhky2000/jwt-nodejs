import bcrypt from 'bcryptjs';
// import { Pool } from 'pg';
import db from '../models/index';


const salt = bcrypt.genSaltSync(10);

// Cấu hình kết nối với PostgreSQL
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "jwt",
//     password: "071052443",
//     port: 5432,
//   });

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const createNewUser = async (email, password, userName) => {
    try {
        let hassPass = hashUserPassword(password);
        await db.User.create({
            username: userName,
            email: email,
            password: hassPass
        })
    } catch (err) {
        console.log("check >>", err);
    }
   
}



const getUserList = async () => {
        // try {
        //     let result = await pool.query('SELECT * FROM Users');
        //     return result.rows;
        // } catch (err) {
        //     console.log("404", err);
        //     return [];
        // }
        let users = []
        users = await db.User.findAll();
        return users;
}

const updateUser = async (id) => {
    // try {
    //     let result = await pool.query('SELECT * FROM Users WHERE id = $1', [id]);
    //     return result.rows;
    // } catch (err) {
    //     console.log("404", err);
    //     return [];
    // }
    let user = {}
        user = await db.User.findOne({ where: { id: id } });
        user = user.get({ plain: true });
        return user;       
}

const updataInfoUser = async (email, userName, id) => {
    // try {
    //     let result = await pool.query('UPDATE Users SET email = $1, username= $2 WHERE id = $3', [email, userName, id]);
    //     return result.rows;
    // } catch (err) {
    //     console.log("404", err);
    //     return [];
    // }
    let user = {};
    user = await db.User.update(
        { 
            email: email,
            username: userName
         },
        {
          where: {
           id: id
          },
        },
      );
    return user;
}

const deleteUser = async (id) => {
    // try {
    // let result = await pool.query('DELETE FROM Users WHERE id = $1', [id]);
    // return result.rows;
    // } catch (err) {
    // console.log("404", err);
    // return [];
    // }
    await db.User.destroy({
        where: {
         id : id
        },
      });
}


module.exports = {
    createNewUser,
    getUserList,
    updateUser,
    deleteUser,
    updataInfoUser,
}



