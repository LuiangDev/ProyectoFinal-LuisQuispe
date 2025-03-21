import React from 'react'
import { ProductCard } from '../../common/productcard/ProductCard'

export const ItemListContainer = () => {
  return (
    <div>
      <h2>Mis Productos</h2>
      <ProductCard title="titulo 1" price="precio 1" />
      <ProductCard title="titulo 2" price="precio 2" />
      <ProductCard title="titulo 3" price="precio 3" />
    </div>
  )
}
