import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import '../styles/produk.scss'



function MyApp({ Component, pageProps }) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp
