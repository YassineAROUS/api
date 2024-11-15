import swaggerJSDoc from "swagger-jsdoc"

const swaggerDefinition = {
    openapi: '3.1.0',
    info: {
        title: 'Associamed',
        version: '1.1.0',
        description: 'The api of Associamed Club',
        contact: {
            name: 'Mohamed Awedi',
            email: 'mmaouedi@gmail.com'
        }
    },
    servers: [
        {
            url: 'http://localhost:8000',
            description: 'API url'
        }
    ]

}

const options = {
    swaggerDefinition,
    apis: ['./src/routes/auth-route.js', './src/routes/token-route.js', './src/routes/user-route.js', './src/routes/event-route.js', './src/routes/call-route.js', './src/routes/news-route.js']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
