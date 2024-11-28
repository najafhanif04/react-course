import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

  const [proData, setProData] = useState([])

  fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((data) => setProData(data));

  console.log(proData);
  return (
    <div>
      <h1 className='bg-red-500 text-white'>Products</h1>
      {proData.map(({id, title, image}, index) => {
        <Link to={`${title}`}>
        <h1>{title}</h1>
        <img src={image} className="w-40" alt="" />
        </Link>
      })}
    </div>
  )
}

export default Products
