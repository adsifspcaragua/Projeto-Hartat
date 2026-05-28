import './css/Sidebar.css'
import logoHartat from '../assets/logo_hartat.webp';

function Sidebar() {

    return(
        <>
            <aside className="sidebar"> {/* Container principal da sidebar */}
                <div className="sidebar_left"> {/* Parte esquerda da sidebar, onde fica o conteúdo principal */}
                    <div className="sidebar_logo"> {/* Área reservada para a logo */}
                        <img src={logoHartat} alt="Logo" className="logo_hartat"/>{/* Imagem da logo */}
                    </div> 
                    <div className="sidebar_menu"> {/* Área do menu de navegação */}
                        <button className="sidebar_menu_item"><a className="text_button">Inicio <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Sobre <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Programação <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Projetos <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Acervo <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Cine Hartat <span>{">"}</span></a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="sidebar_menu_item"><a className="text_button">Intercambios <span>{">"}</span></a></button>     
                    </div>
                    <div className="sidebar_contato">{/* Linha divisória entre o menu e os ícones/rodapé */}
                        <div className="sidebar_icons">{/* Área dos ícones/redes sociais */}
                            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        </div>
                        <div className="sidebar_info">
                            <p>
                            Rua Bartolomeu Bueno da<br/>
                            Silva, 1231 - Martim de Sá<br/>
                            Caraguatatuba, SP<br/> 
                            +55 (12) 98195-0786
                            </p>
                        </div>{/* Texto/rodapé informativo da sidebar */} 
                    </div>    
                </div>
                <div className="sidebar_right"></div> {/* Parte direita da sidebar, decoração */}
            </aside>
            <div className="topbar">
                <div className="topbar_up"> {/* Parte esquerda da sidebar, onde fica o conteúdo principal */}
                    <div className="topbar_logo"> {/* Área reservada para a logo */}
                        <img src={logoHartat} alt="Logo" className="top_logo_hartat"/>{/* Imagem da logo */}
                    </div> 
                    <a className="options_button"><i class="fa-solid fa-bars"></i></a>{/* Botão de opções para menu mobile */}
                </div>
                <div className="topbar_down"> {/* Parte inferior da sidebar, onde ficam os itens do menu */}
                    <div className="topbar_menu"> {/* Área do menu de navegação */}
                        <button className="topbar_menu_item"><a className="text_button">Inicio</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Sobre</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Programação</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Projetos</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Acervo</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Cine Hartat</a></button>
                            <div className="separador"/>{/* Linha separadora entre itens */}
                        <button className="topbar_menu_item"><a className="text_button">Intercambios</a></button>     
                    </div>
                    <div className="topbar_icons">{/* Área dos ícones/redes sociais */}
                        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div> 
            </div>   
        </>
    )
}

export default Sidebar