import { Route, Routes } from "react-router-dom";


import Navbar from "./assets/Navbar";

import  Page  from "./assets/Page";
import Cart from "./assets/Cart";
import { useEffect, useState } from "react";
import Buy from "./assets/Buy";
import Desh from "./Desh";
import Search from "./assets/Search";
import Footer from "./assets/footer";
import Contact from "./assets/Contact";
import About from "./assets/About";





const getlocal = () => {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(localStorage.getItem('cart')) : [];
};

const getlocals = () => {
  let cart = localStorage.getItem('buy');
  return cart ? JSON.parse(localStorage.getItem('buy')) : [];
};



const App = () => {
  const [datawrap, setdatawrap] = useState(getlocal());
  const [first, setfirst] = useState(getlocals())
  const addtocart=(data)=>{
   setdatawrap((items)=>[...items,data]);
   window.scrollTo(0)
  }
  const remove=(ides)=>{
    setdatawrap((prev)=>prev.filter((item) => item.id !== ides));
  
    console.log(datawrap);
  }

  const removeitems=(ides)=>{
    setfirst((prev)=>prev.filter((item) => item.id !== ides));
  
    console.log(first);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(datawrap));
  }, [datawrap]);


  const addt=(data)=>{
    setfirst((items)=>[...items,data]);
    console.log(first);
  window.scrollTo(0);
 
   }
   useEffect(() => {
    localStorage.setItem('buy', JSON.stringify(first));
  }, [first]);

  return (
    <div >
      <Navbar cart={datawrap.length} seco={first.length}/>
      <Routes>
        <Route path="/" element={<Desh  addtocart={addtocart}/>} />
        <Route path="/items/:id" element={<Page  addtocart={addtocart} addt={addt} />} />
        <Route path="/Cart" element={<Cart data={datawrap}  remove={remove}/>} />
        <Route path="/buy" element={<Buy dat={first} remove={removeitems}/>} />
        <Route path="/Search/:name" element={<Search addtocart={addtocart}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </div>
  );
};

export default App;
