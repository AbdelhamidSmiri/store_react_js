
import { useEffect, useState } from "react";
import "./SingleProduct.css";
import * as Liens from "../Contants/Liens"
import { useLocation } from "react-router-dom";
import SingleHead from "../Header/SingleHead";
import SlideImages from "../Sliders/SlideImagesProducts";
import ProductDetails from "./ProductDetails";
import SlideImageSingle from "../Sliders/SlideImageSingle";

export default function SingleProduct() {
    const [product, setProduct] = useState(null);
    const location = useLocation();
    const { ProductId } = location.state;


    const getProduct = async () => {
        try {
            console.log(ProductId)
            const response = await fetch(Liens.products + "/" + ProductId);
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            alert("Il y a des problèmes concernant la récupération de données. " + error);
        }
    }
    useEffect(() => {
        getProduct();
    }, []);

    if (!product) {
        return <div></div>; // You can replace this with a loading indicator
    }

    return (

        <>
            <SingleHead cat={product.category} />

            {
                product.images[0].startsWith('[') ?
                    <img className="w-full   rounded-t-md" src='/stor/images/not-found.jpg' alt="product" /> :
                    <div className="max-h-dvh"><SlideImageSingle slides={product.images} /></div>


            }
            <ProductDetails />

        </>
    )
}