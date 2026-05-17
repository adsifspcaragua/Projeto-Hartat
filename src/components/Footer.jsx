import './css/Footer.css'

function Footer() {

    return(
        <footer className="footer">
            <img src="./src/assets/logo/Hartat.svg" alt="Logomarca do espaço Hartãt" />
            <img src="./src/assets/logo/CarloCury.svg" alt="Logomarca do Ceramista Carlo Cury" />
            <div className='div-texto'>
                <p>Endereço: Rua Bartolomeu Bueno da Silva, 1231 - Martim de Sá Caraguatatuba, SP - 11662-300</p>
                <p>Telefone: +55 (12) 98195-0786 ubuntucaragua@gmail.com</p>
                <p>Horário de atendimento: Segunda à Domingo, das 9h às 12h e 14h às 17h</p>
            </div>
        </footer>
    )
}

export default Footer