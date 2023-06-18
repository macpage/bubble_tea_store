import Footer from '../footer';
import Navbar from './Navbar';
import ProductPage from './ProductPage';

function Home() {
  return (
    <div id="Home">
      <Navbar></Navbar>

      <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}

export default Home;
