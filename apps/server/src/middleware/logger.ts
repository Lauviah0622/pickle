import { RequestHandler } from 'express'

const logger: RequestHandler = (req, res, next) => {
    console.log(`[${req.method}] - ${req.path}`)
    console.log(req.body)
    next()
}

export default logger
