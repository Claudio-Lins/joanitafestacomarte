import Layout from "../components/Layout";
import Footer from '../components/Footer'


import '../styles/globals.css'
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  ) 
}

export default MyApp
