import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Cine from '../pages/Cine'

function PageRouter() {

    return(
        <main className='padding-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path="/cine-hartat" element={<Cine/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter