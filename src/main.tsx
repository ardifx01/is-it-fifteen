import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.tsx'
import { ScrollProgress } from './components/scroll-progress.tsx'
import BubbleCursor from './components/cursor.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ScrollProgress />
        <BubbleCursor />
        <div className="min-h-dvh overflow-hidden bg-zinc-950">
            <App />
        </div>
    </StrictMode>
)
