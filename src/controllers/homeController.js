// import configViewEngine from "../configs/viewEngine";
import usersService from '../service/usersService'
const homeHandle = (req, res) => {
    res.render("home.ejs");
}

const handleUserPage = async(req, res) => {
    let usersList = await usersService.getUserList();
    console.log("check userList >>", usersList);
    res.render("user.ejs");
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userName = req.body.username;

    usersService.createNewUser(email, password, userName);
    
    
    

    // let check = bcrypt.compareSync(password, hashPassword); // true

   

    res.send("create user succsess");
}

module.exports = {
    homeHandle,
    handleUserPage,
    handleCreateNewUser,
}