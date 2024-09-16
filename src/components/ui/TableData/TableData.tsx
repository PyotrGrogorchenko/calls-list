import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const TableData: FC<Props> = ({ children }) => {
    return <td>{children}</td>
}
