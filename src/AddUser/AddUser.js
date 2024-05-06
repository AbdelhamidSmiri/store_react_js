import { useEffect, useRef, useState } from "react";
import Mainhead from "../Header/Mainhead";
import "./AddUser.css";

const AddUser = () => {
  const nom = useRef();
  const prenom = useRef();
  const email = useRef();
  const tel = useRef();

  const [isvalide, setIsValide] = useState(false);
  const [checkValid, setcheckValid] = useState(false);
  const [erreurs, setErreurs] = useState([]);
  let isformvalid = true;

  const validaterequirement = (field) => {
    if (field.current.value.trim() === "") {
      setErreurs((prevState) => {
        return {
          ...prevState,
          ...{ [field.current.id]: `${field.current.id} est obligatoire` },
        };
      });
      isformvalid = false;
    }
  };

  const validateForm = () => {
    const valueEmail = email.current.value;

    validaterequirement(nom);
    validaterequirement(prenom);
    validaterequirement(email);

    if (!valueEmail.match(/^\S+@\S+\.\S+$/)) {
      setErreurs((prevState) => {
        return {
          ...prevState,
          ...{ email: "L'adresse e-mail n'est pas valide" },
        };
      });
      isformvalid = false;
    }

    validaterequirement(tel);

    if (isformvalid) {
      setcheckValid(true);
    } else {
      setcheckValid(false);
    }
    return isformvalid;
  };

  const validateinput = () => {
    setErreurs([]);
    validateForm();
  };
  const displayErreur = (fieldName) => {
    if (erreurs[fieldName]) {
      return erreurs[fieldName];
    }
    return null;
  };

  const displayErreurs = () => {
    return Object.entries(erreurs).map((erreur, key) => {
      const [name, message] = erreur;
      console.log(erreur);
      return (
        <li key={key}>
          {name} : {message}
        </li>
      );
    });
  };

  const resetInputs = () => {
    nom.current.value = "";
    prenom.current.value = "";
    email.current.value = "";
    tel.current.value = "";
  };

  const submitForm = (e) => {
    e.preventDefault();
    setErreurs([]);
    validateForm();

    setIsValide(false);

    if (isformvalid) {
      setIsValide(true);
      resetInputs();
    }
  };

  useEffect(() => {
    console.log(Object.keys(erreurs).length);
  }, [erreurs]);

  return (
    <>
      <Mainhead />

      <div className="m-7">
        {
          //  erreur alert
          Object.keys(erreurs).length > 0 ? (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Attention</span>
              <div>
                <span className="font-medium">
                  Assurez-vous que ces exigences sont obligatoires :
                </span>
                <ul className="mt-1.5 list-disc list-inside">
                  {displayErreurs()}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )
        }
        {isvalide ? (
          <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Success alert!</span> Change a few
              things up and try submitting again.
            </div>
          </div>
        ) : (
          ""
        )}
        <form className="max-w-sm mx-auto" onChange={validateinput}>
          <div className="mb-5">
            <label
              htmlFor="nom"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Nom
            </label>
            <input
              type="text"
              id="nom"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              ref={nom}
              style={
                displayErreur("nom")
                  ? { border: "1px solid red" }
                  : { border: "" }
              }
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {displayErreur("nom")}
            </p>
          </div>

          <div className="mb-5">
            <label
              htmlFor="prenom"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Prenom
            </label>
            <input
              type="text"
              id="prenom"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              ref={prenom}
              style={
                displayErreur("prenom")
                  ? { border: "1px solid red" }
                  : { border: "" }
              }
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {displayErreur("prenom")}
            </p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="exemple@gmail.com"
              required
              ref={email}
              style={
                displayErreur("email")
                  ? { border: "1px solid red" }
                  : { border: "" }
              }
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {displayErreur("email")}
            </p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="tel"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Tel
            </label>
            <input
              id="tel"
              type="number"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              ref={tel}
              style={
                displayErreur("tel")
                  ? { border: "1px solid red" }
                  : { border: "" }
              }
            />
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              {displayErreur("tel")}
            </p>
          </div>
          {(!checkValid).toString()}
          <button
            onClick={submitForm}
            type="submit"
            className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ${
              checkValid == true ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!checkValid}
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
