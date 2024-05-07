/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ResultSearch from "./Search/ResultSearch";
import { Pagesearch } from "./Search/Pagesearch";
import SingleProduct from "./Product/SingleProduct";
import Addproduct from "./AddProduct/Addproduct";
import AddUser from "./AddUser/AddUser";
import Layout from "./Default/Layout";
import PageNotfound from "./PageNotfound/PageNotfound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/pagesearch" element={<Pagesearch />} />
          <Route path="/resultsearch" element={<ResultSearch />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="*" element={<PageNotfound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
