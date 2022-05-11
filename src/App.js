import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Details from './pages/Details'
import AddProduct from './pages/admin/AddProduct'
import Admin from './pages/admin/Admin'
import MyProducts from './pages/admin/MyProducts'
import AdminDetails from './pages/admin/AdminDetails'
import UpdateProduct from './pages/admin/UpdateProduct'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const[category,setCategory]=useState('');
  

  return (
    <BrowserRouter>   
     <Navbar category={category} setCategory={setCategory}  />
     <ScrollToTop>
      <Routes>
        <Route path='product-details/:id' element={<Details />} />
        <Route path="products" element={<Products  category={category} setCategory={setCategory} />} />        
        <Route path="admin" element={<Admin />} >
        <Route path="new-product" element={<AddProduct />} />
        <Route path='my-products' element={<MyProducts/>} />
        <Route path='product-details/:id' element={<AdminDetails />} />
        <Route path='update-product/:id' element={<UpdateProduct />} />        
        </Route>
        <Route path='login' element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes> 
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App