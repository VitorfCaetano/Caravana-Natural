import React from 'react'
import Link from 'gatsby-link'

const Title = (props) => (
  <div style={{textAlign: 'center', marginTop: '50px'}}>
    <h1>
      {props.title}
    </h1>
    <div style={{marginTop: '10px', fontSize: '13px'}}>
      {props.createdAt}
    </div>
  </div>
)

export default Title