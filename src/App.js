/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import ResultSearch from './Search/ResultSearch';
import { Pagesearch } from './Search/Pagesearch';
import SingleProduct from './Product/SingleProduct';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pagesearch" element={<Pagesearch />} />
        <Route path="/resultsearch" element={<ResultSearch />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
