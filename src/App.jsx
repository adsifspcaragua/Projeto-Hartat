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
          <main>
            <PageRouter />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App