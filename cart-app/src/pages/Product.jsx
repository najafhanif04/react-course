import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from "../store/addToCart/cartslice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error while fetching the data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCart = (image, price)  => {
    const product = {
        image,
        price,
      };

      console.log(product);
      

      dispatch(addToCart(product));
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-x-5">
        {products.map(({ title, id, price, image }, index) => (
          <div key={index}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{price}</p>
            <button onClick={() => handleCart (image, price)}> Add to Cart </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
