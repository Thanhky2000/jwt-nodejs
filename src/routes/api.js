import express from "express";
import apiController from '../controllers/apiController'

const router = express.Router();

/**
 * 
 * @param {*} app //express app 
 */
const initApiRoute = (app) => {

    router.get("/test-api", apiController.testApi);
    router.post("/register", apiController.handleRegister);
    return app.use("/api/", router)
}
export default initApiRoute;