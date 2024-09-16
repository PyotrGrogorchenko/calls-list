import { createContext, FC, ReactNode, useContext, useState } from 'react'

import { getCallsList } from '@src/services/callsListService'

import Mock from './mock'

type Props = {
    children: ReactNode
}

export type PartnerData = {
    id: string
    name: string
    phone: string
}

export type Call = Record<string, string>

export type CallsList = {
    total_rows: number
    results: Call[]
}

type Context = {
    selectCallsList: () => CallsList
    takeCallsList: () => Promise<void>
}

const CallsListContext = createContext<Partial<Context>>({})
export const useCallsList = (): Context => useContext(CallsListContext) as Context

export const CallsListProvider: FC<Props> = ({ children }) => {
    const [callsList, setCallsList] = useState<CallsList>()

    const takeCallsList = async () => {
        const res = await getCallsList()
        setCallsList(res.data)

        // setCallsList(Mock as unknown as CallsList)
    }

    const selectCallsList = () => {
        return callsList
    }

    return (
        <CallsListContext.Provider
            value={
                {
                    takeCallsList,
                    selectCallsList,
                } as Context
            }
        >
            {children}
        </CallsListContext.Provider>
    )
}
