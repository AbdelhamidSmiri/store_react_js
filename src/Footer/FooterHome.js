import { useContext, useEffect, useState } from "react";
import "./FooterHome.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Default/Layout";

export default function FooterHome() {
  const navigate = useNavigate();
  const context = useContext(AppContext);

  const handelClick = () => {
    navigate("/addproduct", { state: { cats: context.cats } });
  };

  useEffect(() => {
    let nav = document.querySelector("nav");
    let itemActiv = nav.querySelector(".active-cl");
    nav.style.setProperty("--position-x-active", itemActiv.offsetLeft + "px");
  });

  return (
    <>{console.log(context.cats)}
    <nav>
      <ul>
        <li>
          <Link to="/" className="text-center flex justify-center flex-col items-center gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9.77746V16.2C5 17.8802 5 18.7203 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7203 19 17.8802 19 16.2V5.00002M21 12L15.5668 5.96399C14.3311 4.59122 13.7133 3.90484 12.9856 3.65144C12.3466 3.42888 11.651 3.42893 11.0119 3.65159C10.2843 3.90509 9.66661 4.59157 8.43114 5.96452L3 12M14 21V15H10V21"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs">Accueil</span>
          </Link>
        </li>
        <li>
          <Link to="chat" className="text-center flex justify-center flex-col items-center gap-1">
            <svg
              fill="#000000"
              height="20px"
              width="20px"
              version="1.1"
              id="Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              enableBackground="0 0 24 24"
            >
              <path
                d="M8.5,10.35c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5S8.5,9.52,8.5,10.35z M12,8.85
	c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,8.85,12,8.85z M17,8.85c-0.83,0-1.5,0.67-1.5,1.5
	s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S17.83,8.85,17,8.85z M24,10.32c0,5.36-5.38,9.71-12,9.71c-1.06,0-2.11-0.11-3.12-0.33
	l-6.59,3.69l1.84-5.73C1.5,15.82,0,13.18,0,10.32c0-5.36,5.38-9.71,12-9.71S24,4.96,24,10.32z M22,10.32c0-4.25-4.49-7.71-10-7.71
	S2,6.07,2,10.32c0,2.38,1.4,4.59,3.84,6.07l0.67,0.41l-0.76,2.37l2.83-1.59l0.38,0.09c0.98,0.24,2,0.36,3.03,0.36
	C17.51,18.03,22,14.57,22,10.32z"
              />
            </svg>
            <span className="text-xs">Message</span>

          </Link>
        </li>
        <li className="active-cl">
          <a onClick={() => handelClick()} className="">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M12 4V20"
                stroke="#FFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

          </a>
        </li>
        <li>
          <Link to="stock" className="text-center flex justify-center flex-col items-center gap-1">
            <svg width="20px" height="20px" viewBox="0 0 16 16" version="1.1">
              <path
                fill="#000"
                d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"
              ></path>
              <path fill="#000" d="M0 16h3v-1h10v1h3v-2h-16v2z"></path>
            </svg>
            <span className="text-xs">Stock</span>

          </Link>
        </li>
        <li>
          <Link to={"adduser"} className="text-center flex justify-center flex-col items-center gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs">Compte</span>
          </Link>
        </li>
      </ul>
      <div className="effect">
        <div className="circle"></div>
      </div>
    </nav>
    </>
  );
}
