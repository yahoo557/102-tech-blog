성import express, {Request, Response, NextFunction} from "express"
const compression = require("compression");
const cors = require("cors");


module.exports = () => {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(cors({ origin:'http://127.0.0.1:5173' }));



    // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
    app.use()
    return app;
}
