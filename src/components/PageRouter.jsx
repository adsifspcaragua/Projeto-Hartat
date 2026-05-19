import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/Sidebar.css'
import Home from '../pages/Home'
import Programacao from '../pages/Programacao'

function PageRouter() {

    return(
        <main className='padding-wrapper'>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />}/>
                    <Route path='/programacao' element={<Programacao/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default PageRouter