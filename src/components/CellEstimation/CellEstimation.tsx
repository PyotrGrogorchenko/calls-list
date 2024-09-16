import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'
import { Text } from '../ui/Text'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { Tag } from '../ui/Tag'
import { TagType } from '../ui/Tag/types'

export const CellEstimation: FC<Props> = ({ errors = [] }) => {
    if (errors.length) {
        return <span className={styles.error}>{errors[0]}</span>
    }

    const tagType = ['success', 'error', 'warn'][Math.floor(Math.random() * 3)]
    return <Tag type={tagType as TagType}>Успех</Tag>
}
