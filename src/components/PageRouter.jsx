import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Exposicoes from '../pages/Exposicoes'

function PageRouter() {

    return(
        <main className='padding-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path='/exposicoes' element={<Exposicoes />}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter