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
        {name: 'Início', url: '/'}, 
        {name: 'Sobre', url: '/sobre' }, 
        {name: 'Acervo', url: '/acervo' }, 
        {name: 'Exposições', url: '/exposicoes' }, 
        {name: 'Externo', url: '/atividades-externas' }, 
        {name: 'Cine Hartãt', url: '/cine-hartat' }, 
        {name: 'Programação', url: '/programacao' }, 
        {name: 'Blog', url: '/blog' }, 
    ]

    const socialLinks = [
        { icon: 'fa-whatsapp', url: 'https://wa.me/5512981950786' },
        { icon: 'fa-instagram', url: 'https://www.instagram.com/espacohartat/' },
        { icon: 'fa-facebook', url: 'https://www.facebook.com/profile.php?id=61574629659741' },
        { icon: 'fa-youtube', url: 'https://www.youtube.com/@claudioluizdias8978' }
    ];

    return (
        <aside className={`sidebar ${isOpen ? 'menu_open' : ''}`}>
            <div className="sidebar_header">
                <div className="sidebar_logo">
                    <img src={logoHartat} alt="Logo Hartat" className="logo_hartat" />
                </div> 
                <button className="hamburger_btn" onClick={toggleMenu} aria-label="Menu">
                    <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>
            </div>

            {!isOpen && (
                <div 
                    className="sidebar_pattern_mobile_closed" 
                    style={{ backgroundImage: `url(${DetalheBar})` }}
                />
            )}

            <div className={`sidebar_content ${isOpen ? 'open' : ''}`}>
                <nav className="sidebar_menu">
                    {menuItems.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <a href={`${item.url}`} className="sidebar_menu_item">
                                    <span className="text_button">{item.name} &gt;</span>
                                </a>
                                {index < menuItems.length - 1 && <div className="separador" />}
                            </React.Fragment>
                        );
                    })}
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
                        <p>Rua Bartolomeu Bueno da Silva, 1231</p>
                        <p>Martim de Sá - Caraguatatuba, SP</p>
                        <p>+55 (12) 98195-0786</p>
                    </div>
                </div>

                <div 
                    className="sidebar_pattern_mobile_open" 
                    style={{ backgroundImage: `url(${DetalheBar})` }}
                />
            </div>
            
            <div className="sidebar_pattern_desktop_wrapper">
                <div 
                    className="sidebar_pattern_desktop" 
                    style={{ backgroundImage: `url(${DetalheBar})` }}
                />
            </div>
        </aside>
    );
}

export default Sidebar;