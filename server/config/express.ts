import express, {Request, Response, NextFunction} from "express"

export class Express {

    private compression = require("compression");
    private cors = require("cors");
    private methodOverride = require('method-override');

    app = express();
    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors({ origin:'http://127.0.0.1:5173' }));



    // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
    // require('../src/app/User/userRoute')(app);
    // require('../src/app/board/boardRoute')(app);
    // require('../src/app/Reply/replyRoute')(app);
    // require('../src/app/Random/randomRoute')
    // require('../src/app/Random/randomRoute')(app);
    require('../src/app/Tag/tag.route')(app)

    return app;
}
