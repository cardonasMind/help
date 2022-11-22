import React, { useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { Grid } from '@mui/material'
import { ProductsContext } from '../contexts/contexts'


const ProductGridSection = ({ title, product = [] }) => {
  const products = useContext(ProductsContext)

  return (
    <section className="product-grid">
      <div className="container">
        <h1>{title}</h1>
        <Grid container spacing={1} columnSpacing={2} className="row row-cols-1 row-cols-md-4 g-4">
            {
              products.featuredProducts.map((product) => {
                return(
                <Grid items xs={12} sm={6} md={3}>
                  <ProductCard key={product.articleNumber} product={product} />
                </Grid>
                )

              })
            }

        </Grid>

      </div>
    </section>
  )
}

export default ProductGridSection