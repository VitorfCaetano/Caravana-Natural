import React from 'react'
import Link from 'gatsby-link'

import Contributor from './Contributor'
import vitor from '../../images/vitor-caetano.jpg'

import styles from './contributors.module.scss'

const Contributors = () => (
  <div className={styles.container}>
    <Contributor
      name="Lazaro Neto"
      profession="Editor de Fotografia & Escritor"
      picture="https://via.placeholder.com/350x150"
    />

    <Contributor
      name="Pedro Venâncio"
      profession="Editor & Escritor"
      picture="https://via.placeholder.com/350x150"
    />

    <Contributor
      name="Pedro Henrique"
      profession="Editor & Escritor"
      picture="https://via.placeholder.com/350x150"
    />

    <Contributor
      name="Vitor Caetano"
      profession="Desenvolvedor & Escritor"
      picture={vitor}
    />
  </div>
)

export default Contributors