import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Vapp from './vapp.jsx'
import  {Sapp}  from './sapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Vapp/>
    <Sapp/>
  </StrictMode>,
)
