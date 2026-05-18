import './css/Footer.css'
import { useEffect } from 'react';

function Footer() {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.credito p').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();

    }, []);

    return(
        <footer>
            <div className='footer'>
                <div className='imagens'>
                    <img src="./src/assets/logo/Hartat.svg" alt="Logomarca do espaço Hartãt" />
                    <img src="./src/assets/logo/CarloCury.svg" alt="Logomarca do Ceramista Carlo Cury" />
                </div>

                <div className='div-texto'>
                    <p>Endereço: Rua Bartolomeu Bueno da Silva, 1231 - Martim de Sá Caraguatatuba, SP - 11662-300</p>

                    <p>Telefone: +55 (12) 98195-0786 ubuntucaragua@gmail.com</p>

                    <p>Horário de atendimento: Segunda à Domingo, das 9h às 12h e 14h às 17h</p>
                </div>
            </div>

            <div className='credito'>
                <p>Desenvolvido com <b>♥</b> pelos <a href="https://github.com/adsifspcaragua/Projeto-Hartat">alunos do IFSP</a></p>
            </div>
        </footer>
    )
}

export default Footer