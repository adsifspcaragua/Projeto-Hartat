import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Cine from '../pages/Cine'

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/cine-hartat" element={<Cine/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter