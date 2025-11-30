import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DialogProvider } from './DialogContext.tsx'

createRoot(document.getElementById('root')!).render(
  <DialogProvider>
    <App />
  </DialogProvider>
)
