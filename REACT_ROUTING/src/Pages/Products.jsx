import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams()

  return (
    <div>
        <h2>Products page </h2>
        <h3>{params.id}</h3>
    </div>
  )
}

export default Product