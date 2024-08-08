import configViewEngine from "../configs/viewEngine";

const homeHandle = (req, res) => {
    res.render("home.ejs");
}

const handleUserPage = (req, res) => {
    res.render("user.ejs");
}

module.exports = {
    homeHandle,
    handleUserPage
}