import "./Homehead.css"
import Basket from "../Basket/Basket"
import Search from "../Search/Search"
import Categorie from "../Categories/Categorie"

export default function Homehead({ listProducts, listCats, onCategoryClick }) {
    return (
        <>
            <div className="flex justify-between mx-5 my-7">
                <div>
                    <h2 className="text-gray-300  text-2xl tracking-wide font-helvetica">Discover products</h2>
                </div>
                <div>
                    <div className="flex justify-between gap-4 ">
                        <a className="relative"><Basket color="white" /></a>
                        <Search color="white" listProducts={listProducts} />
                    </div>
                </div>
            </div>
            <Categorie listCats={listCats} onCategoryClick={onCategoryClick} />
        </>
    )
}