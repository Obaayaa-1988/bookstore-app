import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import AddBooks from './components/addBooks'
import SignBook from './components/signBook';
import LoginBook from './components/loginBook';
import Categories from './components/categories';
import Footer from './components/footer';
import Populars from './components/populars';
import Popular from './components/popular';
import Allbooks from './components/allbooks';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addBooks" element={<AddBooks />} />
          <Route path="/signBook" element={<SignBook />} />
          <Route path="/loginBook" element={<LoginBook />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/allbooks" element={<Allbooks />} />
          <Route path="/populars" element={<Populars />} />
          <Route path="/populars/:popularId" element={<Popular />} />
        </Routes>


        <Footer />
      </Router>


    </div>
  );
}

export default App;
