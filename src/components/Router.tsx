import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@src/pages/NotFound'
import { Host } from '@src/pages/Host'

export const Router: FC = () => (
    <Routes>
        <Route path="/" element={<Host />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
)
