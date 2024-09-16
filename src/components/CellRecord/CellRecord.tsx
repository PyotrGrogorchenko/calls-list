import { FC } from 'react'

import { Props } from './types'
import * as styles from './styles.scss'
import { Text } from '../ui/Text'
import { formatPhoneNumber } from '../utils/formatPhoneNumber'
import { Tag } from '../ui/Tag'
import { TagType } from '../ui/Tag/types'
import { Audio } from '../ui/Audio'
import { IconButton } from '../ui/IconButton'

import Download from './pic/download.svg'
import Play from './pic/play.svg'
import Delete from './pic/delete.svg'
import { Icon } from '../ui/Icon'

export const CellRecord: FC<Props> = ({ time, record, partnership_id }) => {
    const url = `https://api.skilla.ru/mango/getRecord?record=${record}&partnership_id=${partnership_id}`

    return <div>{/* <Audio src={url} /> */}</div>
}
