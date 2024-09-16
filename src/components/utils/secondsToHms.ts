import { addLeadingZero } from './addLeadingZero'

export const secondsToHms = (seconds: number) => {
    if (Number.isNaN(seconds) || !seconds) {
        return ''
    }

    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = Math.floor((seconds % 3600) % 60)

    const res = []

    if (h > 0) {
        res.push(String(h))
        res.push(addLeadingZero(m))
    } else {
        res.push(String(m))
    }

    res.push(addLeadingZero(s))

    return res.join(':')
}
