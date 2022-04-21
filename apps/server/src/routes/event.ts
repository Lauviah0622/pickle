import express from 'express'
import { z } from 'zod'

import createUrlKey from '@/utils/createUrlKey'
import prisma from '@/utils/prisma'
import { isNamedExportBindings } from 'typescript'

const router = express.Router()

const eventBodySchema = z.object({
    title: z.string(),
    sponsor: z.object({
        name: z.string(),
    }),
})

router
    .get('/id/:id', async (req, res) => {
        const { id } = req.params
        const data = await prisma.event.findUnique({
            where: {
                id: +id,
            },
            include: {
                sponsor: true,
            },
        })
        res.send(data)
    })
    .get('/urlkey/:urlKey', async (req, res, next) => {
            const { urlKey } = req.params
            throw Error('')
            
            const data = await prisma.event.findUnique({
                where: {
                    urlKey,
                },
                include: {
                    sponsor: true,
                },
            })
            res.send(data)
            throw Error('no-type')
            next()
    })
    .post('/', async (req, res) => {
        try {
            eventBodySchema.parse(req.body)
            const urlKey = await createUrlKey()
            const data = await prisma.event.create({
                data: {
                    title: req.body.title,
                    urlKey,
                    sponsor: {
                        create: {
                            name: req.body.sponsor.name,
                        },
                    },
                },
            })

            console.log(data)
            res.send(req.body)
        } catch (err) {
            console.log(err)
        }
    })
// .put('/', async (req, res) => {
//     try {}
// })

export default router
