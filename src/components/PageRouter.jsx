import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'

function PageRouter() {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter