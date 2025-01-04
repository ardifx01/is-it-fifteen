interface CheckOptions {
    strict?: boolean
    allowNegative?: boolean
    checkBinary?: boolean
}

function isItFifteen(number: number | string, options: CheckOptions = {}): boolean {
    const { strict = true, allowNegative = false, checkBinary = false } = options

    if (checkBinary && typeof number === 'string') {
        const binaryNumber = parseInt(number, 2)
        if (!isNaN(binaryNumber)) number = binaryNumber
    }

    if (strict) return number === 15

    if (allowNegative && typeof number === 'number' && number === -15) return true

    return number == 15
}

export { isItFifteen }
