import { FavoriButton } from "../Contants/Allweneed";
import "./SingleHead.css"
import { useNavigate } from "react-router-dom";

export default function SingleHead({ cat }) {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/'
        );
    }

    return (
        <>{console.log(cat)}
            <div className="absolute flex px-4 items-center justify-between my-5 w-full h-16 z-10">


                <button onClick={handleBack} className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
                    <svg fill="#d1d5db" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="2 0 24 24" width="16" height="16"><path d="M17.17,24a1,1,0,0,1-.71-.29L8.29,15.54a5,5,0,0,1,0-7.08L16.46.29a1,1,0,1,1,1.42,1.42L9.71,9.88a3,3,0,0,0,0,4.24l8.17,8.17a1,1,0,0,1,0,1.42A1,1,0,0,1,17.17,24Z" /></svg>
                </button>

                <div className="flex flex-row h-10 w-4/6 justify-end">

                    <div className="bg-primary rounded-full flex items-center justify-start w-3/4 opacity-35">
                        <div className="p-2 h-full"><img className="h-full  rounded-full" src={cat.image} alt="Catégorie" /></div>
                        <span className="text-xs text-gray-300">
                            <h2 className="text-gray-500 font-light text-xs">Catégorie :</h2>
                            {cat.name}
                        </span>
                    </div>


                    <FavoriButton />

                </div>
            </div>
        </>

    )
}