import express from 'express'

import { event } from '@/routes'
import { logger } from '@/middleware'

const app = express()
const port = 4000

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send('hello wo11231323weq213123we  qw  w   qw  qrerlqwef')
})

app.use('/event', event)

app.listen(port, () =>
    console.log(`Express is listening at http://localhost:${port}`)
)
