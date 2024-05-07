import "./Homehead.css"
import Basket from "../Basket/Basket"
import Search from "../Search/Search"
import Categorie from "../Categories/Categorie"
import { useContext } from "react"
import { AppContext } from "../Home/Home"

export default function Homehead({ onCategoryClick }) {
    const context = useContext(AppContext);
    return (
        <>
            <div className="flex justify-between mx-5 my-7">
                <div>
                    <h2 className="text-gray-950  text-2xl tracking-wide font-helvetica">Discover products</h2>
                </div>
                <div>
                    <div className="flex justify-between gap-4 ">
                        <a className="relative"><Basket color="black" /></a>
                        <Search color="black" listProducts={context.listProducts} />
                    </div>
                </div>
            </div>
            <Categorie listCats={context.listCats} onCategoryClick={onCategoryClick} activedefault={context.selectedCategoryId} />
        </>
    )
}