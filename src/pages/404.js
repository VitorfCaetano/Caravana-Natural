import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div style={{margin: '50px auto', maxWidth: '1450px', textAlign: 'center'}}>
    <h1 style={{margin: '20px 0'}}>
      Página não encontrada
    </h1>
    <p>
      Infelizmente o link na qual você tentou entrar não existe ou não está funcionando.
    </p>
    <p>
      <Link to='/'
        className='underline_link'
      >
        Clique aqui
      </Link> para voltar para a página inicial.
    </p>

  </div>
)

export default NotFoundPage
