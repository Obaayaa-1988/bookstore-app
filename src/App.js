import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Books from './components/books';
import SignBook from './components/signBook';
import LoginBook from './components/loginBook';
import Categories from './components/categories';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/signBook" element={<SignBook />} />
        <Route path="/loginBook" element={<LoginBook />} />
        <Route path="/categories" element={<Categories />} />


      </Routes>


      <Footer />
      </Router>
      
      
    </div>
  );
}

export default App;
