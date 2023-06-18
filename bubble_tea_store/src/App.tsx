import Navbar from './components/Navbar';
import ProductPage from './components/ProductPage';
import Footer from './footer';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
