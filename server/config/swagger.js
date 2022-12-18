const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "백이의 테크 블로그 API",
            description:
                "Swaager swagger-jsdoc 방식 RestFul API Document",
        },
        servers: [
            {
                url: `http://localhost:3000`,
            },
        ],
    },
    apis: ["/Users/seungbaek/Desktop/code/UMC/template/src/app/User/*.js",
        "/Users/seungbaek/Desktop/code/UMC/template/src/app/Board/*.js",
        "/Users/seungbaek/Desktop/code/UMC/template/src/app/Reply/*.js",
        "/Users/seungbaek/Desktop/code/UMC/template/src/app/Random/*.js"]
}
const specs = swaggerJsdoc(options)

module.exports = { swaggerUi, specs }
