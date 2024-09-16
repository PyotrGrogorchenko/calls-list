import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'
import { Text } from '../ui/Text'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'

export const Partner: FC<Props> = ({ data }) => {
    if (!data) {
        return null
    }

    const { name, phone } = data

    return (
        <div className={styles.container}>
            {name && <Text>{name}</Text>}
            {phone && <Text type="secondary">{formatPhoneNumber(phone)}</Text>}
        </div>
    )
}
