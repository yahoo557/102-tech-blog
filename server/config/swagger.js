const swaggerUi = require("swagger-ui-express")
const swaggerJsdoc = require("swagger-jsdoc")
const path = require("path")
const basePath = path.join(__dirname, '../src/app/')
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

    apis: [`${basePath}/User/*.js`,
        `${basePath}/Reply/*.js`,
        `${basePath}/Board/*.js`
        ]
}
const specs = swaggerJsdoc(options)

module.exports = { swaggerUi, specs }
