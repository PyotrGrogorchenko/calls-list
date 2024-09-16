import { parsePhoneNumber, parsePhoneNumberCharacter } from 'libphonenumber-js'

export const formatPhoneNumber = (phone: string) => {
    if (!phone) {
        return ''
    }

    const phoneNumber = parsePhoneNumber(phone, 'RU').formatNational()
    if (phoneNumber.startsWith('8 ')) {
        return `+7 ${phoneNumber.slice(2)}`
    }

    return phoneNumber
}
