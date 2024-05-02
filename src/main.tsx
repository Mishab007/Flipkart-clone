import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './assets/Components/Header'
import Offerbar from './assets/Components/Offerbar'
import Emibar from './assets/Components/Emibar'
import Mobile from './assets/Components/mobile'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Offerbar />
    <Emibar />
    <Mobile />
  </React.StrictMode>,
) 
