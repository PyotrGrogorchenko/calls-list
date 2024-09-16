import { FC, useState } from 'react'
import ReactSelect from 'react-select'
import classnames from 'classnames'

import { Props } from './types'
import * as styles from './styles.scss'
import { Icon } from '../Icon'

export const Select: FC<Props> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState(options[0])
    const [isOpen, setIsOpen] = useState(false)

    const classes = classnames(styles.container)

    return (
        <ReactSelect
            className={classes}
            onMenuOpen={() => setIsOpen(true)}
            onMenuClose={() => setIsOpen(false)}
            components={{
                IndicatorsContainer: (...props) => (
                    <>
                        {isOpen && <Icon type="cap" rotate="50" color="#002CFB" />}
                        {!isOpen && <Icon type="cap" rotate="0" color="#002CFB" />}
                    </>
                ),
            }}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
        />
    )
}
