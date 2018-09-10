import React from 'react'
import Link from 'gatsby-link'


const Sobre = () => {
  const container = {
    margin: '20px auto 40px auto',
    width: '90%',
    maxWidth: '600'
  }

  const paragraph = {
    marginBottom: '15px',
    color: 'rgba(54, 54, 54, 0.9)',
    fontSize: '17px'
  }

  return (
    <main style={container}>
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Quem Somos</h1>
      <section>
        <p style={paragraph}>
          A Caravana Natural é um grupo para pessoas que 
          buscam mudar suas vidas através de experiências e conhecimento.
        </p>
        <p style={paragraph}>
          Criado por 4 amigos, a ideia principal era apenas ter uma maneira 
          de se divertir, estar junto e em contato com a natureza. 
          Com o passar do tempo, as ambições foram crescendo e com isso novas ideias surgiram.
        </p>
        <p style={paragraph}>
          A primeira ação é a criação deste blog, onde temos o intuito de falar 
          sobre tópicos que conhecemos e que acreditamos que são extremamente 
          importantes para o desenvolvimento dos seres humanos.
        </p>
        <p style={paragraph}>
          Com quatro cabeças totalmente diferentes porém com um único propósito, 
          acreditamos que temos experiências suficientes para transmitir um 
          pouco de nosso conhecimento para outras pessoas e tentar mudar de alguma forma, 
          a maneira como o mundo é visto. 
        </p>
      </section>
    </main>
  )
}

export default Sobre