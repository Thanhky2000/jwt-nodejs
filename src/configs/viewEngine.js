import express from "express";
import path from "path";


/**
 * 
 * @param {*} app //express app
 */
const configViewEngine = (app) => {
    app.use('/static', express.static(path.join(__dirname, 'publics')));
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
}


export default configViewEngine;