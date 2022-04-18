import express from 'express'

import { event } from '@/routes'

const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello wo123weqwererlqwef')
})

app.use('/event', event)

app.listen(port, () =>
    console.log(`Express is listening at http://localhost:${port}`)
)
