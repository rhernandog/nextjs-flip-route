import Header from '../components/Header';
import Footer from '../components/Footer';
import ImagesContainer from '../components/ImagesContainer';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <ImagesContainer />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp
