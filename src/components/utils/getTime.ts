import { addLeadingZero } from './addLeadingZero'

export const getTime = (str?: string) => {
    if (!str) {
        return ''
    }
    const date = new Date(str)
    return `${date.getHours()}:${addLeadingZero(date.getMinutes())}`
}
