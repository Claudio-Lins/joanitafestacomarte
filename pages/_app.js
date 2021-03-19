import Layout from "../components/Layout";
import Footer from '../components/Footer'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  ) 
}

export default MyApp
