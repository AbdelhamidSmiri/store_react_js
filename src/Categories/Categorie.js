import { useEffect, useRef, useState } from "react";
import "./Categorie.css"

export default function Categorie({ listCats, onCategoryClick }) {
    const activecat = useRef(1);
    const [width, setWidth] = useState(window.innerWidth);



    const handelCat = (categoryId) => {
        onCategoryClick(categoryId);
        activecat.current = categoryId;
    }
    return (
        <>
        
            <div className={`relative shrink-0 grow-0 flex overflow-auto pl-3 {activecat.current}`} style={{width:width}} >

                {listCats?.length > 0 ? (
                    // If listCats is not undefined or empty, map over each category
                    listCats.map((cat, index) => (
                        <div className="w-fit min-w-fit" key={index}>
                            <button
                                type="button"
                                id={cat.id}
                                onClick={() => handelCat(cat.id)} // Assuming handelCat is a function to handle the click event
                                className={`text-gray-300 bg-box font-medium rounded-full text-sm pr-4 h-11 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 ${activecat.current === cat.id ? 'active' : ''}`}
                            >
                                <img
                                    className="w-full h-full me-3 rounded-full"
                                    src={cat.image}
                                    alt="Jese"
                                />
                                <span className="w-max text-left">{cat.name}</span>
                            </button></div>
                    ))
                ) : (
                    // If listCats is undefined, null, or empty, render this message
                    <span>Aucune catégories</span>
                )}




            </div>
        </>

    )
}