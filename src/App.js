import {Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Blog from "./pages/Blog/Blog";
import Lottery from "./pages/Lottery/Lottery";
import Feedback from "./pages/Feedback/Feedback";
import Contacts from "./pages/Contacts/Contacts";
import Catalog from "./pages/Catalog/Catalog";
import AboutUs from "./pages/AboutUs/AboutUs";
import Card from "./pages/Card/Card";
import './utils/i18n'
import '../src/styles/style.scss'

function App() {
  return (
    <Suspense fallback={'...loading'}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='basket' element={<Basket/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='lottery' element={<Lottery/>}/>
          <Route path='feedback' element={<Feedback/>}/>
          <Route path='contacts' element={<Contacts/>}/>
          <Route path='catalog' element={<Catalog/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='card' element={<Card/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
