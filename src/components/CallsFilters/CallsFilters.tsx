import { columns } from '@src/models'
import { TableRow } from '@src/components/ui/TableRow'
import { TableHead } from '@src/components/ui/TableHead'
import { TableHeadCell } from '@src/components/ui/TableHeadCell'

import * as styles from './styles.scss'
import { Select } from '../ui/Select'
import { DateSelect } from '../ui/DateSelect'

export const CallsFilters = () => {
    return (
        <div className={styles.container}>
            <Select
                options={[
                    { value: 'Все типы', label: 'Все типы' },
                    { value: 'Входящие', label: 'Входящие' },
                    { value: 'Исходящие', label: 'Исходящие' },
                ]}
            />

            <DateSelect />
        </div>
    )
}
