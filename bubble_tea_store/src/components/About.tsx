import Footer from '../footer';
import Navbar from './Navbar';
import Page from './Page';
import ProductPage from './ProductPage';

function About() {
  console.log('what');
  return (
    <div id="About">
      <Navbar></Navbar>
      <Page></Page>
      <Footer></Footer>
    </div>
  );
}

export default About;
