import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Externo from '../pages/Externo'

function PageRouter() {

    return(
        <main className='padding-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/atividades-externas" element={<Externo />}/>.
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter