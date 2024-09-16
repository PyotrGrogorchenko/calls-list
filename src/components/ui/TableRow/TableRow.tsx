import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const TableRow: FC<Props> = ({ children, ...rest }) => {
    return (
        <tr className={styles.container} {...rest}>
            {children}
        </tr>
    )
}
