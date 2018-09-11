import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/Footer'

import '../scss/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Caravana Natural é um blog para todos que querem discutir sobre filosofia, aventuras e os mistérios da vida.' },
        { name: 'keywords', content: 'blog, natureza, filosifa, aventura, vida, tecnologia, caravana, caravana natural' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <main>
      {children()}
    </main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
