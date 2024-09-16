import { HTMLAttributes, ReactNode } from 'react'

export type Props = {
    children: ReactNode
    type?: 'head' | 'row'
} & HTMLAttributes<HTMLTableRowElement>
