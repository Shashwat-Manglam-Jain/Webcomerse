import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Serviceapi from '../api';

const Search = ({ addtocart }) => {
  const { name } = useParams();
  const [first] = useState(Serviceapi);

  const filteredProducts = first.filter((product) =>
    product.name.toLowerCase().includes(name.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    return <div>No products found for {name}</div>;
  }

  return (
    <>
      <br /><br /><br /><br /><br />
      <div className='flex gap-28 ml-11'  onClick={() => window.scrollTo(0, 0)}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Link to={`/items/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
              <img
                src={product.images}
                alt={product.name}
                height={200}
                width={400}
                className="p-5 h-96 w-96 cursor-pointer ram"
                onClick={() => window.scrollTo(0, 0)}
              />
            </Link>
            <div className="text-2xl pl-10 font-semibold w-80">
              <h1>{product.name}</h1>
            </div>
            <div className="text-1xl pl-10 text-gray-500">
              <h3>{product.purchase}</h3>
            </div>
            <span className="text-1xl font-semibold">
              <h2 className="pl-10">
                M.R.P: ₹{product.Price} <span>{product.off}</span>
              </h2>{" "}
              <strike className="text-gray-500 pl-10   ">
                {product.before}
              </strike>
            </span>{" "}
            <br />
            <Link to='/cart'>
              <button
                onClick={() => {
                  addtocart(product);
                }}
              >
                <div className=" p-2  cursor-pointer w-48 mt-5 ml-10 font-semibold text-2xl text-center hover:bg-[#f63667ff] text-white uppercase  hover:text-white bg-gray-800">
                  Add to Cart
                </div>
              </button>{" "}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
