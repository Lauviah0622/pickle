import { customAlphabet } from 'nanoid'
import prisma from '../prisma'

const getStringFromCharCodeArray = (input: number[]): string =>
    String.fromCharCode.apply(null, input)

const createRangeArray = (from: number, to: number): number[] =>
    Array.from(Array(to - from + 1), (_, i) => i + from)

export const LENGTH = 8
export const ALPHABETS: string = [
    ...getStringFromCharCodeArray(createRangeArray(48, 57)),
    ...getStringFromCharCodeArray(createRangeArray(65, 90)),
    ...getStringFromCharCodeArray(createRangeArray(97, 122)),
].join('')

const nanoid = customAlphabet(ALPHABETS, LENGTH)

const createUrlKey = async (): Promise<string> => {
    // TODO: try catch
    const newUrlKey = await nanoid()

    const sameKey = await prisma.event.findUnique({
        where: {
            urlKey: newUrlKey,
        },
    })

    const result = sameKey ? await createUrlKey() : newUrlKey
    return result
}

export default createUrlKey

// const nanoid = customAlphabet(, 10)
