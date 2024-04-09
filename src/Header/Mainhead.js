import { FavoriButton } from "../Contants/Allweneed";
import "./SingleHead.css";
import { useNavigate } from "react-router-dom";

export default function Mainhead() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between mx-5 my-5">
        <button onClick={handleBack} className="">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18l-6-6 6-6"
              stroke="#FFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="9"
              y1="12"
              x2="21"
              y2="12"
              stroke="#FFF"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="w-4/6">
         
        </div>
      </div>
    </>
  );
}
