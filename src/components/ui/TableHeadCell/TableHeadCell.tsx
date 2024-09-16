import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const TableHeadCell: FC<Props> = ({ children }) => {
    return <th className={styles.container}>{children}</th>
}
