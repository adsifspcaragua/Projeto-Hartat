import './css/Sidebar.css'
import logoHartat from '../assets/logo_hartat.webp';

function Sidebar() {

    return(
        <aside className="sidebar"> {/* Container principal da sidebar */}
            <div className="sidebar_left"> {/* Parte esquerda da sidebar, onde fica o conteúdo principal */}
                <div className="sidebar_logo"> {/* Área reservada para a logo */}
                    <img src={logoHartat} alt="Logo" className="logo_hartat"/>{/* Imagem da logo */}
                </div> 
                <div className="sidebar_menu"> {/* Área do menu de navegação */}
                    <button className="sidebar_menu_item">Inicio <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Sobre <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Programação <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Projetos <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Acervo <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Cine Hartat <span>{">"}</span></button>
                        <div className="separador"/>{/* Linha separadora entre itens */}
                    <button className="sidebar_menu_item">Intercambios <span>{">"}</span></button>     
                </div>
                <div className="sidebar_icons">{/* Área dos ícones/redes sociais */}
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </div>
                <div className="sidebar_info">Rua Bartolomeu Bueno da Silva, 1231 - Martim de Sá
                Caraguatatuba, SP 
                +55 (12) 98195-0786
                </div>{/* Texto/rodapé informativo da sidebar */}      
            </div>
            <div className="sidebar_right"></div> {/* Parte direita da sidebar, decoração */}
        </aside>
    )
}

export default Sidebar