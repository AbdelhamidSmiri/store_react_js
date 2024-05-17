
import { useLocation } from "react-router-dom";
import Productsgrid from "../Product/Productsgrid"
import ResultHead from "../Header/ResultHead";
import { filteredProducts } from "../Contants/Allweneed";
import { useContext } from "react";
import { AppContext } from "../Default/Layout";


export default function ResultSearch() {
    const context = useContext(AppContext);
    const location = useLocation();
    const { val } = location.state;
    return (
        <>{console.log("value is ", location.state, context.listProducts)}
            <ResultHead  val={val} />
            <Productsgrid FiltredProducts={filteredProducts(context.listProducts, val)} />
        </>)
}

