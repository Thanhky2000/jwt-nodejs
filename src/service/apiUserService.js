import db from '../models/index';
import bcrypt from 'bcryptjs';


const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}

const checkEmail = async (userEmail) => {

    let checkEmailExist = await db.User.findOne({
        where: { email: userEmail }
    })
    if(checkEmailExist) {
        return true;
    }

    return false
}

const checkPhone = async (userPhone) => {

    let checkPhoneExist = await db.User.findOne({
        where: { phone: userPhone }
    })
    if(checkPhoneExist) {
        return true;
    }

    return false
}




const registerNewUser = async (userData) => {
    try {
        let isEmailExist =await checkEmail(userData.email);
        if(isEmailExist === true) {
            return {
                EM: "Email is exist",
                EC: 1
            }
        }
        let isPhoneExist =await checkPhone(userData.phone);
        if(isPhoneExist === true) {
            return {
                EM: "Phone is exist",
                EC: 1
            }
        }
    
        let hashPassword = hashUserPassword(userData.password);
    
        await db.User.create({
            email: userData.email,
            username: userData.userName,
            password: hashPassword,
            phone: userData.phone
        })

        return {
            EM: "Creater user success",
            EC: 0
        }
    } catch (err) {
        console.error("Error occurred in registerNewUser >>>>>>:", err);
        return {
            EM : "ERROR FROM SV",
            EC: -2
        }
    }
   
}

module.exports = {
    registerNewUser,checkEmail
}