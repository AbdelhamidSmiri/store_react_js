/* eslint-disable jsx-a11y/anchor-is-valid */
import { createContext, useEffect, useState } from 'react';
import Homehead from '../Header/Homehead';
import * as Liens from '../Contants/Liens'
import Productsgrid from '../Product/Productsgrid';
import { filteredProducts } from '../Contants/Allweneed';
import FooterHome from '../Footer/FooterHome';


export const AppContext = createContext({});

function Home() {
    const [listProducts, setListProducts] = useState();
    const [listCats, setListCats] = useState();
    const [selectedCategoryId, setSelectedCategoryId] = useState(); // default cat
    const [ListFilter, setListFilter] = useState(null);
    const [valideget, setValidget] = useState(false);


    



    const getProducts = async () => {
        try {
            const response = await fetch(Liens.products);
            const data = await response.json();
            setListProducts(data);
        } catch (error) {
            alert("Il y a des problèmes concernant la récupération de données. " + error);
        }
    }
    const getCats = async () => {
        try {
            const response = await fetch(Liens.cat);

            const data = await response.json();
            setListCats(data);
        } catch (error) {
            alert("Il y a des problèmes concernant la récupération de données. " + error);
        }
    }

    // Callback function to handle the category click
    const handleCategoryClick = (categoryId) => {
        getProducts();
        setSelectedCategoryId(categoryId);
        // Do whatever you need to do with the selected categoryId in the parent component
    };


    useEffect(() => {
        getCats();
        getProducts();
        setValidget(true)

    }, []);

    useEffect(() => {
        console.log(selectedCategoryId)
        if(listCats  && selectedCategoryId==null){
        console.log("is undifined",listCats[0].id)

        handleCategoryClick(listCats[0].id)
        }
        if (valideget && selectedCategoryId!=null)
            setListFilter(filteredProducts(listProducts, selectedCategoryId));
    }, [selectedCategoryId, listProducts]);

    return (
        <AppContext.Provider value={{listCats,listProducts,selectedCategoryId}}>
        <div className='home'>
            <Homehead listProducts={listProducts}  onCategoryClick={handleCategoryClick} />
            <div className='mb-20'>
            {listProducts && ListFilter === null ? (
                <Productsgrid listProducts={listProducts} />
            ) : (
                <Productsgrid listProducts={ListFilter} />
            )}</div>
            <div className='before-footer pb-16'></div>
        </div>
        </AppContext.Provider>
    );
}

export default Home;
