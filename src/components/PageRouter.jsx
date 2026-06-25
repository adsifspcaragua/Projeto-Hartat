import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'

import Home from '../pages/Home'
import Programacao from '../pages/Programacao'
import Externo from '../pages/Externo'
import Exposicoes from '../pages/Exposicoes'
import Acervo from "../pages/Acervo";
import Cine from '../pages/Cine'
import Sobre from  '../pages/sobre'

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/acervo" element={<Acervo />} />
                <Route path="/atividades-externas" element={<Externo />}/>
                <Route path='/programacao' element={<Programacao/>}/>
                <Route path='/exposicoes' element={<Exposicoes />}/>
                <Route path="/cine-hartat" element={<Cine/>}/> 
                <Route path="/atividades-externas" element={<Externo />}/>
                <Route path="/sobre" element={<Sobre />}/>

            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter