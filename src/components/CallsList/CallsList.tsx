import { useEffect } from 'react'

import { useCallsList } from '@src/components/providers/CallsListProvider'
import { CallsHead } from '@src/components/CallsHead'
import { CallsBody } from '@src/components/CallsBody'
import { Table } from '@src/components/ui/Table'

import * as styles from './styles.scss'
import { CallsFilters } from '../CallsFilters'

export const CallsList = () => {
    const { takeCallsList } = useCallsList()

    useEffect(() => {
        takeCallsList()
    }, [])

    return (
        <div>
            <CallsFilters />
            <div className={styles.tableContainer}>
                <Table>
                    <CallsHead />
                    <CallsBody />
                </Table>
            </div>
        </div>
    )
}
