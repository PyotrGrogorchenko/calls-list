import { FC } from 'react'
import classnames from 'classnames'

import { Props } from './types'
import * as styles from './styles.scss'

export const Tag: FC<Props> = ({ type = 'warn', children }) => {
    return <span className={classnames(styles.tag, styles[type])}>{children}</span>
}
