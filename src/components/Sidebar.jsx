import React, { useState } from 'react';
import './css/Sidebar.css';
import logoHartat from '../assets/logo_hartat.webp';
import DetalheBar from '../assets/detail_topbar.webp';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        'Inicio', 'Sobre', 'Programação', 'Projetos', 
        'Acervo', 'Cine Hartat', 'Intercambios'
    ];

    const socialLinks = [
        { icon: 'fa-whatsapp', url: '#' },
        { icon: 'fa-instagram', url: '#' },
        { icon: 'fa-facebook', url: '#' },
        { icon: 'fa-twitter', url: '#' }
    ];

    return (
        <aside className="sidebar">
            {/* 1. ÁREA SUPERIOR (Logo e Botão) */}
            <div className="sidebar_header">
                <div className="sidebar_logo">
                    <img src={logoHartat} alt="Logo Hartat" className="logo_hartat" />
                </div> 
                {/* O botão só vai aparecer no Mobile via CSS */}
                <button className="hamburger_btn" onClick={toggleMenu} aria-label="Menu">
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            {/* 2. ÁREA DE CONTEÚDO (Menu e Contato) */}
            {/* A classe 'open' é injetada no mobile se o botão for clicado */}
            <div className={`sidebar_content ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar_menu">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="sidebar_menu_item">
                                <span className="text_button">{item} <span className="arrow">{">"}</span></span>
                            </a>
                            {index < menuItems.length - 1 && <div className="separador" />}
                        </React.Fragment>
                    ))}
                </nav>

                <div className="sidebar_contato">
                    <div className="sidebar_icons">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                <i className={`fa-brands ${social.icon}`}></i>
                            </a>
                        ))}
                    </div>
                    <div className="sidebar_info">
                        <p>
                            Rua Bartolomeu Bueno da Silva, 1231<br />
                            Martim de Sá - Caraguatatuba, SP<br />
                            +55 (12) 98195-0786
                        </p>
                    </div> 
                </div>    
            </div>
            
            {/* Imagem de detalhe: Só aparece no mobile via CSS */}
            <div className="sidebar_detail_mobile">
                <img src={DetalheBar} alt="Detalhe de borda" />
            </div>
        </aside>
    );
}

export default Sidebar;