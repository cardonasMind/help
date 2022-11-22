import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import NotFoundView from './views/NotFoundView';
import FooterSection from './sections/FooterSection';
import Showcase from './components/Showcase';
import { ProductsContext } from './contexts/contexts';


function App() {
  const [featuredProducts, setFeaturedProducts] = useState ([
    all: [],
    newProducts: []
  ])

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllProducts()

    const fetchNewProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, newProducts: await result.json()})
    }
    fetchNewProducts()

  }, [setFeaturedProducts])  



//  const [topProducts, setToProducts] = useState ([
//    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
//    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
//    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1855586/pexels-photo-1855586.jpeg?cs=srgb&dl=pexels-lola-russian-1855586.jpg&fm=jpg&_gl=1*1e3ryoq*_ga*OTc0MTU3MzEwLjE2NjU4NzE5NTg.*_ga_8JE65Q40S6*MTY2NzUzMjQyMS40LjAuMTY2NzUzMjQyMS4wLjAuMA.."},
//    { id: 4, name: "Modern Green Jeans", category: "Fashion", price: "$135.00", rating: 5, img: "https://www.dhresource.com/0x0/f2/albu/g15/M01/62/30/rBVa3l-x1u6AZR6OAAZTgatyN3I989.jpg"}
//    ]) 


  return (
    <BrowserRouter> 
      <ProductsContext.Provider value={featuredProducts}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/showcase" element={<Showcase />} />
        
        <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductsContext.Provider>

    </BrowserRouter>
  );
}

export default App;
