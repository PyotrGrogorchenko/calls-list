import { FC } from 'react'

import { Props } from './types'

import * as styles from './styles.scss'

export const IconButton: FC<Props> = ({ children, ...rest }) => {
    return (
        <div {...rest} className={styles.container}>
            {children}
        </div>
    )
}
