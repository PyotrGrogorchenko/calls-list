import { FC } from 'react'

import { Props } from './types'

import * as styles from './styles.scss'
import classnames from 'classnames'

export const Text: FC<Props> = ({ type = 'primary', children, ...rest }) => {
    const classes = classnames(styles[type])
    return (
        <span {...rest} className={classes}>
            {children}
        </span>
    )
}
