import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { ScrollProgress } from './components/scroll-progress.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ScrollProgress />
        <div className="min-h-dvh overflow-hidden bg-zinc-950">
            <App />
        </div>
    </StrictMode>
)
