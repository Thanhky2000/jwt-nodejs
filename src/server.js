require("dotenv").config();
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";



const app = express();
const PORT = process.env.PORT || 3300;

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);

initWebRoute(app);

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`);
});
