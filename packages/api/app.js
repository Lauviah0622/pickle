const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const PORT = 6005

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.listen(PORT, () =>
  console.log(`swagger is listening at http://localhost:${PORT}/docs`)
)
