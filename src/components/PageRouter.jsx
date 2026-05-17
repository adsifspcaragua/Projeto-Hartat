import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Acervo from "../pages/Acervo";

function PageRouter() {

    return(
        <main className='padding-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/acervo" element={<Acervo />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter