import { useEffect, useRef, useState } from "react";
import "./Categorie.css"

export default function Categorie({ listCats, onCategoryClick,activedefault }) {
    const activecat = useRef(1);
    const [width, setWidth] = useState(window.innerWidth);



    const handelCat = (categoryId) => {
        onCategoryClick(categoryId);
        

    }
    useEffect(() => {
        console.log("active default : ",activedefault)
        if(activedefault){
            console.log("coco")
            console.log(activecat.current)
            activecat.current = activedefault
            console.log(activecat.current)
        }
    }, [activedefault])

    useEffect(() => {
        console.log(activedefault)

    }, [activedefault])
    
    return (
        <>
        {console.log(activedefault)}
            <div className={`relative shrink-0 grow-0 flex overflow-auto pl-3 {activecat.current}`} style={{width:width}} >

                {listCats?.length > 0 ? (
                    // If listCats is not undefined or empty, map over each category
                    listCats.map((cat, index) => (
                        <div className="w-fit min-w-fit" key={index}>
                            <button
                                type="button"
                                id={cat.id}
                                onClick={() => handelCat(cat.id)} // Assuming handelCat is a function to handle the click event
                                className={`text-gray-950 bg-box font-medium rounded-full text-sm pr-4 h-11 text-center grid items-center grid-cols-2 dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2 ${activecat.current === cat.id ? 'active' : ''}`}
                                style={{backgroundColor:"#e9e9e9d6"}}
                            >
                                <div className="">
                                <img
                                    className=" h-full max-h-11 me-3 rounded-full"
                                    src={cat.image}
                                    alt="Jese"
                                /></div>
                                <div><span className="w-max text-left">{cat.name}</span></div>
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