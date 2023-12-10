const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const errorHandler = require('./middleware/error_handler')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

// const options = {
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Homework-9',
//         version: '1.0.0',
//       },
//       servers: [
//         {
//             url: 'http://localhost:3000'
//         }
//       ]
//     },
//     apis: ['./src/routes*.js'], // files containing annotations as above
//   };
  
//   const openapiSpecification = swaggerJsdoc(options);
  
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})