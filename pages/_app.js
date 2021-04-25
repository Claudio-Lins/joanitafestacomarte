import React, {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar"
import Dropdown from '../components/Navbar/Dropdown';
import Footer from "../components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { 
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("Resizzzzze")
      }
    }
    window.addEventListener('resize', hideMenu);

    return() => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  return (
    <Layout>
      <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
