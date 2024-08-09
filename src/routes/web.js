import express from "express";
import homeController from "../controllers/homeController";


const router = express.Router();

/**
 * 
 * @param {*} app //express app 
 */
const initWebRoute = (app) => {
    router.get("/",homeController.homeHandle);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user",homeController.handleCreateNewUser);
    return app.use("/", router)
}
export default initWebRoute;