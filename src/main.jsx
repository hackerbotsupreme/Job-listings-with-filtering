import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { JobsProvider } from './Context/Job-list'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobsProvider>
      <App />
    </JobsProvider>
  </React.StrictMode>
)
