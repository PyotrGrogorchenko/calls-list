import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from '@src/components/Router'
import { ErrorBoundary } from '@src/components/ErrorBoundary'

import './styles/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <Router />
        </ErrorBoundary>
    </BrowserRouter>
)
