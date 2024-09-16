import { FC } from 'react'
import classnames from 'classnames'

import { Props } from './types'

import * as styles from './styles.scss'

import Arrow from './pic/arrow.svg'
import Cap from './pic/cap.svg'
import Calendar from './pic/calendar.svg'
import Download from './pic/download.svg'
import Play from './pic/play.svg'
import Delete from './pic/delete.svg'

export const Icon: FC<Props> = ({ type, rotate, ...rest }) => {
    const classes = classnames(styles[`rotate-${rotate}`])

    switch (type) {
        case 'arrow':
            return <Arrow {...rest} className={classes} />
        case 'cap':
            return <Cap {...rest} className={classes} />
        case 'calendar':
            return <Calendar {...rest} className={classes} />
        case 'play':
            return <Play {...rest} className={classes} />
        case 'download':
            return <Download {...rest} className={classes} />
        case 'delete':
            return <Delete {...rest} className={classes} />
        default:
            return <></>
    }
}
