/* eslint-disable jsx-a11y/anchor-is-valid */
import { createContext, useContext, useEffect, useState } from "react";
import Productsgrid from "../Product/Productsgrid";
import { AppContext } from "../Default/Layout";
import { filteredProducts } from "../Contants/Allweneed";
import Homehead from "../Header/Homehead";
export const HomeContext = createContext({});

function Home() {
const context = useContext(AppContext);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null); // default cat
  const [ListFilter, setListFilter] = useState([]);
  const [valideget, setValidget] = useState(false);

  

  // Callback function to handle the category click
  const handleCategoryClick = (categoryId) => {
      setSelectedCategoryId(categoryId);

      // Do whatever you need to do with the selected categoryId in the parent component
  };


  useEffect(() => {
    console.log(selectedCategoryId);
    console.log(context.listCats);

    if (context.listCats && context.listCats.length > 0) {
      if (selectedCategoryId == null) {
        handleCategoryClick(context.listCats[0].id);
      } else if (context.listProducts) {
        setListFilter(filteredProducts(context.listProducts, selectedCategoryId));
      }
    }
  }, [context.listCats, context.listProducts, selectedCategoryId]);

  if (!context.listCats || context.listCats.length === 0 || !context.listProducts) {
    return <div>Loading...</div>; // Handle the loading state or empty list case
  }

if (!context.listCats || context.listCats.length === 0 || !context.listProducts) {
    return <div>Loading...</div>; // Handle the loading state or empty list case
  }
  console.log(ListFilter);
  return (
    <HomeContext.Provider value={{ selectedCategoryId,ListFilter }}>
      {/* <HomeContext.Provider value={{selectedCategoryId,ListFilter}}> */}
      <div className="home">
        <Homehead  onCategoryClick={handleCategoryClick} />
        <div className="mb-20">
          <Productsgrid />
        </div>
        <div className="before-footer pb-16"></div>
      </div>
    </HomeContext.Provider>
    
  );
}

export default Home;
