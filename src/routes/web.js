import express from "express";
import homeController from "../controllers/homeController";
import apiController from '../controllers/apiController'

const router = express.Router();

/**
 * 
 * @param {*} app //express app 
 */
const initWebRoute = (app) => {
    router.get("/",homeController.homeHandle);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);
    router.post("/delete-user/:id", homeController.handleDeleteUser);
    router.post("/update-user/:id", homeController.handleUpdateUser);
    router.post("/users/update-user",homeController.handleSaveNewInfo);


    router.get("/api/test-api", apiController.testApi);
    return app.use("/", router)
}
export default initWebRoute;