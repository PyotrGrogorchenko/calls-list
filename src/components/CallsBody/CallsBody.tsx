import { PartnerData, useCallsList } from '@src/components/providers/CallsListProvider'

import { TableRow } from '@src/components/ui/TableRow'
import { TableBody } from '@src/components/ui/TableBody'
import { TableData } from '@src/components/ui/TableData'
import { columns } from '@src/models'
import { secondsToHms } from '@src/components/utils/secondsToHms'

import * as styles from './styles.scss'
import { Avatar } from '../ui/Avatar'
import { getTime } from '../utils/getTime'
import { Partner } from '../Partner'
import { Icon } from '../ui/Icon'
import { Tag } from '../ui/Tag'
import { CellEstimation } from '../CellEstimation'
import { CellRecord } from '../CellRecord'

export const CallsBody = () => {
    const { selectCallsList } = useCallsList()
    const callsList = selectCallsList()

    if (!callsList) {
        return null
    }

    const { results } = callsList

    // export const columns = {
    //     in_out: 'Тип',
    //     date: 'Время',
    //     person_avatar: 'Сотрудник',
    //     phone: 'Звонок',
    //     source: 'Источник',
    //     estimation: 'Оценка',
    //     time: 'Длительность',
    // }
    // data={row.partner_data as unknown as Partner} />
    return (
        <TableBody>
            {results.map((row) => {
                return (
                    <TableRow key={`${row.id}`} data-id={`${row.id}`}>
                        {Object.keys(columns).map((key) => {
                            const data = row[key]
                            switch (key) {
                                case 'person_avatar':
                                    return (
                                        <TableData key={`row_${key}_${row.id}`}>
                                            <Avatar src={data} />
                                        </TableData>
                                    )
                                case 'date':
                                    return <TableData key={`row_${key}_${row.id}`}>{getTime(data)}</TableData>
                                case 'time':
                                    return (
                                        <TableData key={`row_${key}_${row.id}`}>
                                            <CellRecord time={data as unknown as number} record={row.record} partnership_id={row.partnership_id} />
                                        </TableData>
                                    )
                                case 'in_out':
                                    return (
                                        <TableData key={`row_${key}_${row.id}`}>
                                            <Icon
                                                type="arrow"
                                                rotate={String(data) === '1' ? '0' : '50'}
                                                color={String(data) === '1' ? '#28A879' : '#005FF8'}
                                            />
                                        </TableData>
                                    )

                                case 'estimation':
                                    return (
                                        <TableData key={`row_${key}_${row.id}`}>
                                            <CellEstimation errors={row.errors as unknown as string[]} />
                                        </TableData>
                                    )
                                case 'phone':
                                    return (
                                        <TableData key={`row_${key}_${row.id}`}>
                                            <Partner data={row.partner_data as unknown as PartnerData} />
                                        </TableData>
                                    )
                                default:
                                    return <TableData key={`row_${key}_${row.id}`}>{data}</TableData>
                            }
                        })}
                    </TableRow>
                )
                // console.log('row', row)
                // return null
            })}

            {/* <tr>
                {Object.entries(columns).map(([key, value]) => (
                    <td>{value}</td>
                ))}
            </tr> */}
        </TableBody>
    )
}
