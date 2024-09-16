import { FC } from 'react'

import { CallsList } from '@src/components/CallsList'
import { CallsListProvider } from '../../components/providers/CallsListProvider'

export const Host: FC = () => {
    return (
        <CallsListProvider>
            <CallsList />
        </CallsListProvider>
    )
}
