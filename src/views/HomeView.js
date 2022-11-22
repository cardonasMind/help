import React, { useContext } from 'react'
import Showcase from '../components/Showcase'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ServicesSection from '../sections/servicesSection'
import { ProductsContext } from '../context'
import Advertisement from '../sections/Advertisement'

// const props = {
// text : 'hej',
// featuredProducts,
// topProducts
// }

// const { featuredProducts, topProducts } = props

const HomeView = () => {
  const productsContext = useContext(ProductsContext);

  window.top.document.title = 'Fixxo.'

  return (
    <>

      <MainMenuSection />
      <Showcase />
      <ProductGridSection title="Featured Products" products={productsContext.featuredProducts} />
      <ProductGridSection title="Top Products" />
      <Advertisement />
      {/* <MittenSection /> */}
      <ServicesSection />
      <FooterSection />

      {/* </div> */}
    </>
  )
}





export default HomeView