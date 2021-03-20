import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
