import { ErrorRequestHandler } from 'express'

const errorMessages: Record<string, string> = {
    'no-type': 'no-type',
}

const errorHandler: ErrorRequestHandler = (err, req, res) => {
    res.status(400)
    res.json({
        error: errorMessages[err.message],
    })
    res.end()
}

export default errorHandler
