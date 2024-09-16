import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const Table: FC<Props> = ({ children, ...rest }) => {
    return (
        <table {...rest} className={styles.container}>
            {children}
        </table>
    )
}
