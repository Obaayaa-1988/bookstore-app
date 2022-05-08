import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Book from './components/book';
import SignBook from './components/signBook';
import LoginBook from './components/loginBook';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/signBook" element={<SignBook />} />
        <Route path="/loginBook" element={<LoginBook />} />
        <Route path="/categories" element={<Categories />} />


      </Routes>



      </Router>
      
      
    </div>
  );
}

export default App;
