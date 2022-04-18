import createUrlKey from './createUrlKey'

const ALPHABETS =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ1234567890'
const LENGTH = 8

describe('test urlKey', () => {
    test('isValidLength', async () => {
        const urlKey = await createUrlKey()
        expect(urlKey.length).toEqual(LENGTH)
    })

    test('isValidChar', async () => {
        const urlKey = await createUrlKey()
        const isValidChar: boolean = Array.from(urlKey).reduce(
            (prev, char) => prev && ALPHABETS.includes(char),
            true
        )
        expect(isValidChar).toBe(true)
    })
})
