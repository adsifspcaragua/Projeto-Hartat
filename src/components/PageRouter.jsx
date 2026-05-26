import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'

function PageRouter() {

    return(
        <main>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter