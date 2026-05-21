import '../components/css/Acervo.css'


function Acervo() {
  return (
     <div>
      <h1 className='pageTitle'>Acervo de obras</h1>

      <div className='filters'>
        <div className='search'>
          <input type='text' placeholder='Pesquisar' />
          <button className='search=button'>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2z"
              stroke="currentColor"
              stroke-width="2"/>
            </svg>
          </button>
        </div>

        <div className='type-container'>
          <span>Tipo de obra:</span>
          <select>
            <option>Todas</option>
            <option>Cerâmica</option>
            <option>Pintura</option>
            <option>Artesanato</option>
          </select>
        </div>

         <div className="order-container">
          <span>Ordenar:</span>
            <select>
              <option>Relevância</option>
              <option>Mais recentes</option>
              <option>Mais antigos</option>
              <option>Nome A–Z</option>
              <option>Nome Z-A</option>
            </select>
          </div>
      </div>

      <h2>Explore por etnias</h2>





     </div>
    
  )
}

export default Acervo
