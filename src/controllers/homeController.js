// import configViewEngine from "../configs/viewEngine";
import usersService from '../service/usersService'
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

    // usersService.createNewUser(email, password, userName);
    usersService.getUserList();
    
    

    // let check = bcrypt.compareSync(password, hashPassword); // true

   

    res.send("create user succsess");
}

module.exports = {
    homeHandle,
    handleUserPage,
    handleCreateNewUser,
}