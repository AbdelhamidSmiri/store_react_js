import { TrimString, Star } from "../Contants/Allweneed";
import "./SingleProduct.css";
import * as Liens from "../Contants/Liens"
import SlideImages from "../Sliders/SlideImages";
export default function SingleProduct({ product, productId }) {
    return (
        <div className="relative my-2 bg-box rounded-md shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div id={productId}>

                <div className="text-center flex justify-center rounded-md h-48">
                    {/* <img className="w-52  rounded-t-xl" src="https://s.alicdn.com/@sc04/kf/Hc8d0c69fca3a4458be7d407a704e2705f.jpg_350x350xz.jpg" alt="product" /> */}
                    {/* <img className="w-52  rounded-t-xl" src={product.image} alt="product" /> */}
                    {
                        product.images[0] == '["https://placeimg.com/640/480/any"]' ?
                            <img className="w-52  rounded-t-md" src='/stor/images/not-found.jpg' alt="product" /> :
                            <SlideImages slides={product.images} />



                    }
                </div>
                <div className="p-2 ">
                    <h5 className="text-sm md:text-xl font-normal tracking-tight text-gray-300"><TrimString Title={product.title} length={30} /></h5>
                    <div className=" mt-1 mb-2">
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