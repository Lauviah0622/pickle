import express from 'express'

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!22121256565633')
})

app.listen(port, () =>
  console.log(`Express is listening at http://localhost:${port}`)
)
