import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'

import Home from '../pages/Home'
import Externo from '../pages/Externo'
import Acervo from "../pages/Acervo";
import Cine from '../pages/Cine'

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/acervo" element={<Acervo />} />
                <Route path="/cine-hartat" element={<Cine/>}/> 
                <Route path="/atividades-externas" element={<Externo />}/>.
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter