import {Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import Feedback from "./pages/Feedback/Feedback";
import Contacts from "./pages/Contacts/Contacts";
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import './utils/i18n'
import '../src/styles/style.scss'
import Favorite from "./pages/Favorite/Favorite";
import Card from "./pages/Card/Card";
import Product from "./pages/Product/Product";
import Order from "./pages/Order/Order";

function App() {



  return (
    <Suspense fallback={'...Store Loading'}>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={''} element={<Home/>}/>
          <Route path={'login'} element={<Login/>}/>
          <Route path={'register'} element={<Register/>}/>
          <Route path={'basket'} element={<Basket/>}/>
          <Route path={'checkout'} element={<Checkout/>}/>
          <Route path={'feedback'} element={<Feedback/>}/>
          <Route path={'contacts'} element={<Contacts/>}/>
          <Route path={'catalog/:category'} element={<Catalog/>}/>
          <Route path={'aboutus'} element={<AboutUs/>}/>
          <Route path={'favorite'} element={<Favorite/>}/>
          <Route path={'product/:id'} element={<Product/>}/>
          <Route path={'card'} element={<Card/>}/>
          <Route path={'order'} element={<Order/>}/>
          <Route path={'checkout'} element={<Order/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
