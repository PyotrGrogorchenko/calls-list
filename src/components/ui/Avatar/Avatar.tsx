import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'

export const Avatar: FC<Props> = ({ src }) => {
    return <img className={styles.container} src={src} />
}
