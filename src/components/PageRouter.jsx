import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Exposicoes from '../pages/Exposicoes'
import Acervo from "../pages/Acervo";

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/acervo" element={<Acervo />} />
                <Route path='/exposicoes' element={<Exposicoes />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter