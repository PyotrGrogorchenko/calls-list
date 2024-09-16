import { FC } from 'react'

import { Props } from './types'

import * as styles from './styles.scss'

export const Datepicker: FC<Props> = ({ ...rest }) => {
    return <input {...rest} type="date"></input>
}
