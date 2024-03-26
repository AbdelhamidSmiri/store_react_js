
import { useLocation } from "react-router-dom";
import Productsgrid from "../Product/Productsgrid"
import ResultHead from "../Header/ResultHead";
import { filteredProducts } from "../Contants/Allweneed";


export default function ResultSearch() {
    const location = useLocation();
    const { listProducts } = location.state;
    const { val } = location.state;
    return (
        <>{console.log("value is ", location.state, listProducts)}
            <ResultHead listProducts={listProducts} val={val} />
            <Productsgrid listProducts={filteredProducts(listProducts, val)} />
        </>)
}

