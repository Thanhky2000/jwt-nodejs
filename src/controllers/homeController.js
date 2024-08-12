// import configViewEngine from "../configs/viewEngine";
import usersService from '../service/usersService'
const homeHandle = (req, res) => {
    res.render("home.ejs");
}

const handleUserPage = async(req, res) => {
    let usersList = await usersService.getUserList();
    res.render("user.ejs", {usersList});
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let userName = req.body.username;
    usersService.createNewUser(email, password, userName);
    return res.redirect("/user");
}

const handleUpdateUser = async (req, res) => {
//  let email = req.body.email;
//  let userName = req.body.username;
 let id = req.params.id;
 let user = await usersService.updateUser(id);
 let userData = {};
 if(user && user.length > 0) {
    userData = user[0];
 }
 res.render("update.ejs", {userData})
}

const handleDeleteUser = async (req, res) => {
    let id = req.params.id;
    await usersService.deleteUser(id);
    res.redirect("/user");
}
const handleSaveNewInfo = async (req, res) => {
    let email =  req.body.email;
    let userName = req.body.username;
    let id = req.body.id;
   await usersService.updataInfoUser(email, userName, id);
   return res.redirect("/user");
}


module.exports = {
    homeHandle,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    handleUpdateUser,
    handleSaveNewInfo,
}