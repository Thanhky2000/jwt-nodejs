// import configViewEngine from "../configs/viewEngine";
import usersService from '../service/usersService'
const homeHandle = (req, res) => {
    res.render("home.ejs");
}

const handleUserPage = async(req, res) => {
    let usersList = await usersService.getUserList();
    await usersService.deleteUser(21);
    console.log("check userList >>", usersList);
    res.render("user.ejs", {usersList});
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userName = req.body.username;

    usersService.createNewUser(email, password, userName);
    
    res.redirect("/user");
}

const handleDeleteUser = async (req, res) => {
    let id = req.params.id;
    await usersService.deleteUser(id);
    res.redirect("/user");
}

module.exports = {
    homeHandle,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
}