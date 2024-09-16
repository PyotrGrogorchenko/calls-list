import { ReactNode } from 'react'

export type TagType = 'success' | 'error' | 'warn'

export type Props = {
    type?: TagType
    children: ReactNode
}
