import './Title.css';

import React from 'react'

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Title