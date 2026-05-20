import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'

import Home from '../pages/Home'
import Exposicoes from '../pages/Exposicoes'
import Acervo from "../pages/Acervo";
import Cine from '../pages/Cine'
import Externo from '../pages/Externo'

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/acervo" element={<Acervo />} />
                <Route path='/exposicoes' element={<Exposicoes />}/>
                <Route path="/cine-hartat" element={<Cine/>}/> 
                <Route path="/atividades-externas" element={<Externo />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter