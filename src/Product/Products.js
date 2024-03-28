import { TrimString, Star } from "../Contants/Allweneed";
import "./Products.css";
import * as Liens from "../Contants/Liens"
import SlideImages from "../Sliders/SlideImages";
import { Link, useNavigate } from "react-router-dom";
export default function Products({ product }) {
    const navigate = useNavigate();

    const handelClick = (id) => {
        navigate('/singleproduct', { state: { ProductId: id } });
    }
    return (
        <div onClick={(() => handelClick(product.id))} className="relative my-2 bg-box rounded-md shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div id={product.id}>

                <div className="text-center flex justify-center rounded-md h-48">
                    {/* <img className="w-52  rounded-t-xl" src="https://s.alicdn.com/@sc04/kf/Hc8d0c69fca3a4458be7d407a704e2705f.jpg_350x350xz.jpg" alt="product" /> */}
                    {/* <img className="w-52  rounded-t-xl" src={product.image} alt="product" /> */}
                    {
                        product.images[0].startsWith('[') ?
                            <img className="w-52  rounded-t-md" src='/stor/images/not-found.jpg' alt="product" /> :
                            <SlideImages slides={product.images} />



                    }
                </div>
                <div className="p-2 ">
                    <h5 className="text-sm md:text-xl font-normal tracking-tight text-gray-300"><TrimString Title={product.title} length={20} /></h5>
                    <div className="">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <Star rate={3} /> <span className="text-gray-400 counter font-light"> ({200})</span>
                        </div>
                    </div>
                    <span className="md:text-3xl font-semibold text-gray-300 text-xl">{product.price} </span><span className="text-gray-300 ">DH</span>

                </div>

            </div >
        </div>

    )
}