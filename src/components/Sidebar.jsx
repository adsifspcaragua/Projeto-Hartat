import './css/Sidebar.css'
import logoHartat from '../assets/logo_hartat.webp';

function Sidebar() {

    return(
        <aside className="sidebar"> 
            <div className="sidebar_left">
                <div className="sidebar_logo"><img src={logoHartat} alt="Logo" className="logo_hartat"/></div>
                <div className="sidebar_menu">
                    <button className="sidebar_menu_item">Inicio</button>
                    <button className="sidebar_menu_item">Sobre</button>
                    <button className="sidebar_menu_item">Programação</button>
                    <button className="sidebar_menu_item">Projetos</button>
                    <button className="sidebar_menu_item">Acervo</button>
                    <button className="sidebar_menu_item">Cine Hartat</button>
                    <button className="sidebar_menu_item">Intercambios</button>     
                </div>
                <div className="sidebar_icons">
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className="sidebar_info">lorem ipsum dolor sit amet</div>      
            </div>
            <div className="sidebar_right"></div>
        </aside>
    )
}

export default Sidebar