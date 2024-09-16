import { columns } from '@src/models'
import { TableRow } from '@src/components/ui/TableRow'
import { TableHead } from '@src/components/ui/TableHead'
import { TableHeadCell } from '@src/components/ui/TableHeadCell'

import * as styles from './styles.scss'

export const CallsHead = () => {
    return (
        <TableHead>
            <TableRow className={styles.tableRowContainer}>
                {Object.entries(columns).map(([key, value]) => (
                    <TableHeadCell key={key}>{value}</TableHeadCell>
                ))}
            </TableRow>
        </TableHead>
    )
}
