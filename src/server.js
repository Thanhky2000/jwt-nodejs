require("dotenv").config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";

const app = express();
const PORT = process.env.PORT || 3300;

configViewEngine(app);

initWebRoute(app);

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
