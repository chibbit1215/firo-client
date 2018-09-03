import { ucFirst } from '#/lib/utils'
import { camelCase, snakeCase } from 'lodash'

export const getName = (namespace) => {
    const name = camelCase(namespace)
    const Name = ucFirst(name)
    const NAME = snakeCase(namespace).toUpperCase()

    return {
        name,
        Name,
        NAME
    }
}

export const getTypeName = (name) => {
    return snakeCase(name).toUpperCase()
}

export const formatDenominationPairs = function (denominations) {
    return Object.entries(denominations)
    // transform to [{denomination: '25', amount: 1}]
        .map((pair) => {
            const [ denomination, amount ] = pair

            return {
                denomination,
                amount,
                cost: parseInt(denomination) * amount
            }
        })
        .filter((denom) => denom.amount)
}