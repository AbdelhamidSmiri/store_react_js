import { useEffect, useRef, useState } from "react";
import Mainhead from "../Header/Mainhead";
import "./Addproduct.css";
import { useLocation } from "react-router-dom";
import { products } from "../Contants/Liens";

const Addproduct = () => {
  const inputTitleRef = useRef();
  const inputPriceRef = useRef();
  const inputDescRef = useRef();
  const inputCatRef = useRef();

  // const [newproduct, setNewProduct] = useState({
  //   title: "",
  //   price: 0,
  //   description: "",
  //   categoryId: 0,
  //   images: ["https://placeimg.com/640/480/any"],
  // });

  useEffect(() => {
    inputTitleRef.current.value =""
  }, [])
  

  const location = useLocation();
  const { cats } = location.state;

  const getcats = () => {
    return (
      <>
        <option>Choisissez une catégorie</option>
        {cats.map((cat, index) => (
          <option key={index} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </>
    );
  };

  // const handelchangeinput = (e) => {
  //   const name = e.currentTarget.id;
  //   let value = e.currentTarget.value;
  //   console.log(e.currentTarget.type);
  //   if (
  //     e.currentTarget.type === "number" ||
  //     e.currentTarget.type === "select-one"
  //   ) {
  //     value = parseInt(value, 10); // Base 10
  //     if (isNaN(value)) {
  //       value = 0; // Set default value if parsing fails
  //     }
  //   }
  //   setNewProduct((prevState) => {
  //     return { ...prevState, [name]: value };
  //   });
  // };

  const submitForm = (e) => {
    e.preventDefault();
    const newproduct = {
      title: inputTitleRef.current.value,
      price: parseInt(inputPriceRef.current.value, 10),
      description: inputDescRef.current.value,
      categoryId: parseInt(inputCatRef.current.value, 10),
      images: ["https://placeimg.com/640/480/any"],
    };

    fetch(products, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You might need to include additional headers if required by the API
      },
      body: JSON.stringify(newproduct),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("Form submitted successfully");
        alert("Le produit est ajouté avec  succès!");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Merci de remplir tout les champs ");

        if (error.response) {
          console.error("Response:", error.response);
        }
      });
  };

  return (
    <>
      <Mainhead />
      <div className=" m-7">
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Titre de produit
            </label>
            <input
              type="text"
              id="title"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Smart phone Samsung Galaxy A10s"
              required
              ref={inputTitleRef}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Prix
            </label>
            <input
              type="number"
              id="price"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              step={0.01}
              min={0}
              required
              ref={inputPriceRef}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="shadow-sm border 0 block w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ecris une description détaillée du produit..."
              ref={inputDescRef}
            ></textarea>
          </div>
          <div className="mb-5">
            <label
              htmlFor="categoryId"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Catégorie
            </label>
            <select
              id="categoryId"
              ref={inputCatRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {getcats()}
            </select>
          </div>
          <div className="mb-5">
            <label
              htmlFor="images"
              className="block mb-2 text-sm font-medium text-gray-950"
            >
              Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="images"
              type="file"
              multiple
            />
          </div>
          <button
            onClick={submitForm}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
};

export default Addproduct;
