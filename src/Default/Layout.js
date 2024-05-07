import React from "react";
import FooterHome from "../Footer/FooterHome";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import * as Liens from "../Contants/Liens";

function Layout() {
  const [listCats, setListCats] = useState();

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
  }, []);

  return (
    <>
        <Outlet />

      <div className="home">
        <FooterHome cats={listCats} />
      </div>
    </>
  );
}

export default Layout;
