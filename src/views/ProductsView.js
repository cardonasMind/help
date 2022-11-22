import React, { useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../context';

const ProductsView = () => {
  const productsContext = useContext(ProductsContext);

  // const [topProducts, setToProducts] = useState ([
  //   { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
  //   { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
  //   { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
  //   { id: 4, name: "Modern Green Jeans", category: "Fashion", price: "$135.00", rating: 5, img: "https://www.dhresource.com/0x0/f2/albu/g15/M01/62/30/rBVa3l-x1u6AZR6OAAZTgatyN3I989.jpg"}

  //   ])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Top Products" products={productsContext.products} />
      <FooterSection />
    </>
  )
}

export default ProductsView




