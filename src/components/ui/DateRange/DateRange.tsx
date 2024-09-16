import { FC } from 'react'

import { Props } from './types'

import * as styles from './styles.scss'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'

export const DateRange: FC<Props> = ({ ...rest }) => {
    return (
        <div className={styles.container}>
            <div className={styles.datesContainer}>
                <span>__.__.__</span>
                <span>-</span>
                <span>__.__.__</span>
            </div>
            <IconButton data-action="back">
                <Icon type="calendar" color="#002CFB" />
            </IconButton>
        </div>
    )
}
