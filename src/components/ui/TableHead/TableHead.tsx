import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const TableHead: FC<Props> = ({ children }) => {
    return <thead className={styles.container}>{children}</thead>
}
