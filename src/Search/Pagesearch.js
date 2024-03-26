import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import "./Search.css";
import * as Lien from '../Contants/Liens';
import { useLocation, useNavigate } from "react-router-dom";
import { filteredProducts } from '../Contants/Allweneed';

export function Pagesearch() {
    const [isVisible, setIsVisible] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const location = useLocation();
    const { listProducts } = location.state;
    const { value } = location.state;
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigates back to the previous page
    };

    const handelSearch = (value) => {
        console.log(value)
        setSearchValue(value)
    }



    const ClickSearch = (value) => {
        // Set the search value state (assuming setSearchValue is defined)
        setSearchValue(value);

        // Log the value to the console
        console.log(value);
        console.log(filteredProducts(listProducts, searchValue));

        // Navigate to ResultSearch route with state
        navigate('/resultsearch', { state: { listProducts: listProducts, val: value } });
    };

    useEffect(() => {


        if (value) {
            inputRef.current.value = value
            setSearchValue(value);
        }
        inputRef.current.focus();

    }, []);



    return (
        <>

            {console.log(value)}
            <div className={`search-page bg-white w-full h-full fixed top-0 left-0 z-10  items-start  justify-center ${isVisible ? "visible" : "hidden"}`} >
                <div className="search-container flex items-center justify-between border-b p-2 pb-1 border-gray-200 ">

                    <button onClick={handleBack} className="">
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <line x1="9" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </button>

                    <div className="relative flex items-center input-search w-11/12">
                        <input type="text" placeholder="Rechercher..." ref={inputRef} className="w-full rounded-3xl border-1 border-gray-300 bg-gray-100 focus:border-gray-300 ring-0 !ring-white" id="input_search" onChange={(e) => handelSearch(e.target.value)} />
                        <button className="bg-zinc-950 text-white py-1 px-5 rounded-3xl  absolute right-2 " onClick={() => ClickSearch(document.querySelector("#input_search").value)}>
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny" id="Calque_1" x="0px" y="0px" viewBox="0 0 1024 1024" >
                                <g>
                                    <path display="none" fill={"white"} d="M64.004,457.785c0-128.853,0.058-257.706-0.177-386.558   c-0.011-6.274,1.232-7.506,7.505-7.502c308.392,0.198,616.784,0.198,925.175,0c6.271-0.004,7.506,1.228,7.502,7.501   c-0.198,308.392-0.198,616.783,0,925.175c0.004,6.27-1.17,8.018-7.515,7.501c-8.493-0.693-17.086-0.172-25.635-0.172   c0.605-0.545,1.123-1.378,1.829-1.593c29.536-8.982,39.586-42.366,18.162-64.438c-38.88-40.056-78.633-79.271-118.356-118.497   c-10.599-10.466-24.097-12.857-38.231-8.385c-28.505,9.018-36.337,43.773-14.684,65.676c32.386,32.76,65.079,65.218,97.677,97.769   c10.881,10.866,20.937,22.741,35.283,29.468c-293.43,0-586.861-0.028-880.291,0.172c-6.869,0.005-8.429-1.546-8.419-8.417   c0.227-154.196,0.174-308.392,0.174-462.588c1.443,0.327,1.661,1.416,1.837,2.68c1.93,13.884,3.308,27.877,5.952,41.625   c46.319,240.881,285.615,394.144,524.426,336.015c226.323-55.089,368.295-283.842,317.363-511.351   C852.495,129.003,549.609-15.073,300.754,112.05C170.568,178.552,93.981,286.353,68.984,430.624   C67.415,439.68,68.48,449.261,64.004,457.785z" />
                                    <path fill={"white"} d="M64.004,457.785c4.476-8.524,3.412-18.105,4.981-27.161c24.996-144.27,101.584-252.071,231.77-318.574   c248.855-127.122,551.741,16.953,612.827,289.818c50.932,227.509-91.04,456.262-317.363,511.351   c-238.81,58.129-478.107-95.134-524.426-336.015c-2.644-13.748-4.022-27.741-5.952-41.625c-0.176-1.264-0.393-2.353-1.837-2.68   C64.004,507.861,64.004,482.823,64.004,457.785z M845.788,495.788c-0.867-195.075-158.193-352.047-352.519-351.726   c-195.062,0.323-351.515,157.955-350.887,353.779c0.602,187.664,151.092,348.485,349.807,349.346   C688.439,848.037,846.648,689.389,845.788,495.788z" />
                                    <path fill={"white"} d="M952.539,1003.73c-14.346-6.727-24.402-18.602-35.283-29.468c-32.598-32.551-65.29-65.009-97.677-97.769   c-21.654-21.904-13.821-56.658,14.684-65.676c14.135-4.472,27.633-2.082,38.231,8.385c39.723,39.227,79.476,78.441,118.356,118.497   c21.424,22.072,11.374,55.456-18.162,64.438c-0.706,0.215-1.223,1.048-1.829,1.593   C964.753,1003.73,958.646,1003.73,952.539,1003.73z" />
                                </g>
                            </svg>
                        </button>

                    </div>

                </div>
                <div className="available-height overflow-y-auto mt-5">
                    {filteredProducts(listProducts, searchValue).map((product, index) => (

                        <a key={index} href={Lien.products + "/" + product.id} className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <img className="w-11 h-11 me-2 rounded-full" src={product.images[0]} alt="Jese image" />
                            {/* <img className="w-11 h-11 me-2 rounded-full" src={product.image} alt="Jese image" /> */}
                            <div className="flex flex-col">
                                <h5>{product.title}</h5>
                                <span className="text-xs font-thin text-gray-400 ">
                                    {product.category.name}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>


            </div>

        </>)
}
