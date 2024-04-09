import { useEffect, useState } from "react";
import { TrimString, Star } from "../Contants/Allweneed";
import "./Products.css";

import * as Liens from "../Contants/Liens"
import Products from "./Products";

export default function Productsgrid({ listProducts }) {
    const [col1Products, setCol1Products] = useState([]);
    const [col2Products, setCol2Products] = useState([]);

    const displayProducts = () => {
        // Reset the products in both columns before updating
        setCol1Products([]);
        setCol2Products([]);
        if (listProducts && listProducts.length !== 0) {
            return listProducts.map((product, key) => {
                if (key % 2 === 0) {
                    setCol1Products((prevProducts) => [...prevProducts, product]);
                } else {
                    setCol2Products((prevProducts) => [...prevProducts, product]);
                }

                // Always return null in map functions
                return null;
            })
        }
    }


    useEffect(() => {
        displayProducts();
    }, [listProducts]);

    return (
        <div className='mt-0 m-3 grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-3'>
            <div className='flex flex-col' id='mycol1'>
                {col1Products.map((product,index) => (
                    <Products key={index} product={product} />
                ))}
            </div>
            <div className='flex flex-col' id='mycol2'>
                {col2Products.map((product,index) => (
                    <Products key={index} product={product} />
                ))}
            </div>
        </div>

    )
}