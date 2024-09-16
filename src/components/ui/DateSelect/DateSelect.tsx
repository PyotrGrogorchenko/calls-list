import { FC, MouseEvent, MouseEventHandler, useState } from 'react'
import ReactSelect from 'react-select'
import classnames from 'classnames'

import { Props } from './types'
import * as styles from './styles.scss'
import { Icon } from '@src/components/ui/Icon'
import { Text } from '@src/components/ui/Text'
import { IconButton } from '@src/components/ui/IconButton'
import { getDataset } from '@src/components/utils/getDataset'
import { Datepicker } from '../Datepicker'
import { DateRange } from '../DateRange'

const options = [
    { value: '3days', label: '3 дня' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
    { value: 'year', label: 'Год' },
]

export const DateSelect: FC<Props> = () => {
    const [selectedOption, setSelectedOption] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const onInput = (e: MouseEvent<HTMLDivElement>) => {
        const dataset = getDataset(e.target as HTMLElement)
        const { action } = dataset

        if (!action) {
            return
        }

        switch (action) {
            case 'back':
                console.log('baxk')
                setCurrentIndex(Math.max(0, currentIndex - 1))
                break
            case 'forward':
                setCurrentIndex(Math.min(options.length - 1, currentIndex + 1))
                break
            case 'openList':
                setIsOpen(true)
                break
            default:
                break
        }
    }

    const onList = (e: MouseEvent<HTMLDivElement>) => {
        const dataset = getDataset(e.target as HTMLElement)

        const { action } = dataset

        if (!action) {
            return
        }

        const index = options.reduce((res, v, i) => {
            if (action === v.value) {
                res = i
            }
            return res
        }, -1)
        setCurrentIndex(index)
        setIsOpen(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer} onClick={onInput}>
                <IconButton data-action="back">
                    <Icon type="cap" rotate="25" color="#002CFB" data-action="back" />
                </IconButton>
                <div className={styles.input} data-action="openList">
                    <Icon type="calendar" data-action="openList" />
                    <span data-action="openList">{options[currentIndex].label}</span>
                </div>
                <IconButton data-action="forward">
                    <Icon type="cap" rotate="75" color="#002CFB" data-action="forward" />
                </IconButton>
            </div>
            {isOpen && (
                <div className={styles.listContainer} onClick={onList}>
                    <div className={styles.list}>
                        {options.map((o, i) => {
                            return (
                                <span className={classnames(styles.option, i === currentIndex && styles.selectedOption)} data-action={o.value}>
                                    {o.label}
                                </span>
                            )
                        })}

                        <div className={styles.rangeContainer}>
                            <span className={classnames(styles.option, styles.rangeOption)} data-action={'range'}>
                                Указать даты
                                <div className={styles.rangeInputContainer}>
                                    <DateRange></DateRange>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
