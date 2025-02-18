import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart" 
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import FilterData from './pages/FilterData'
import ProductDetail from './pages/ProductDetail'
import FilteredProducts from './pages/FilteredProducts' // Import the new component

function App() {
  const [order, setOrder] = useState(null)

  return (
   <BrowserRouter>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/conatact" element={<Footer />} />
       <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
       <Route path="/order-confirmation" element={<Order order={order} />} />
       <Route path="/filter-data" element={<FilterData/>} />
       <Route path="/product/:id" element={<ProductDetail/>} />
       <Route path="/category/:category" element={<FilteredProducts />} /> {/* Add this route */}
     </Routes>
     <Footer />
   </BrowserRouter>
  )
}

export default App