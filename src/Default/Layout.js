import React, { createContext, useCallback } from "react";
import FooterHome from "../Footer/FooterHome";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Liens from "../Contants/Liens";

export const AppContext = createContext({});

function Layout() {
  const [listCats, setListCats] = useState();
  const [listProducts, setListProducts] = useState();
  // const [ListFilter, setListFilter] = useState(null);
  // const [valideget, setValidget] = useState(false);
  // const [selectedCategoryId, setSelectedCategoryId] = useState(); // default cat

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(Liens.products);
      const data = await response.json();
      setListProducts(data);
    } catch (error) {
      alert(
        "Il y a des problèmes concernant la récupération de données. " + error
      );
    }
  }, []);

  const getCats = async () => {
    try {
      const response = await fetch(Liens.cat);
      const data = await response.json();
      setListCats(data);
    } catch (error) {
      alert(
        "Il y a des problèmes concernant la récupération de données. " + error
      );
    }
  };

  useEffect(() => {
    getCats();
    getProducts();
  }, [getProducts]);
  
{console.log(listCats)}
  return (
    <>
      <AppContext.Provider value={{ listCats, listProducts }}>
        <Outlet />

        <div className="home">
          <FooterHome />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default Layout;
