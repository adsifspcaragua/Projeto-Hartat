import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import PageRouter from './components/PageRouter'

function App() {

  return (
    <>
      <div className='layout'>
        <Sidebar />
        <div className='content'>
          <PageRouter />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
