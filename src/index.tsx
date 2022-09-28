import { createRoot } from 'react-dom/client'
import { AppProvider } from './context'

import App from './App'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)
root.render(
  <AppProvider>
    <App />
  </AppProvider>
)
