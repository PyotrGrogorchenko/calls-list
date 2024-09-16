import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const TableBody: FC<Props> = ({ children }) => {
    return <tbody>{children}</tbody>
}
