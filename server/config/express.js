const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const dotenv = require('dotenv')
var cors = require('cors');
module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors({ origin:'http://127.0.0.1:5173' }));
    const { swaggerUi, specs } = require("./swagger")

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))
    // app.use(express.static(process.cwd() + '/public'));

    /* App (Android, iOS) */

    // TODO: 도메인을 추가할 경우 이곳에 Route를 추가하세요.
    require('../src/app/User/userRoute')(app);
    require('../src/app/board/boardRoute')(app);
    require('../src/app/Reply/replyRoute')(app);
    // require('../src/app/Random/randomRoute')
    require('../src/app/Random/randomRoute')(app);


    return app;
};
