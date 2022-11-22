import React, { useContext } from 'react'
import Showcase from '../components/Showcase'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import Adertisement from '../sections/MittenSection'
import ServicesSection from '../sections/servicesSection'
import { ProductsContext } from './contexts/contexts';


// const props = {
// text : 'hej',
// featuredProducts,
// topProducts
// }

// const { featuredProducts, topProducts } = props

const HomeView = () => {
  const productsContext = useContext(ProductsContext)

  window.top.document.title = 'Fixxo.'

  return (
    <>

      <MainMenuSection />
        <Showcase />
        <ProductGridSection title="Featured Products" product={productsContext.featuredProducts}/>
        <ProductGridSection title="Top Products"/>
        <Adertisement />
        <ServicesSection/>

        <FooterSection />

      {/* </div> */}
    </>
  )
}





export default HomeView