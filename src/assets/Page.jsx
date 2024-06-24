import { createContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Serviceapi from "../api";



const Page = ({ children, addtocart,addt }) => {
  const { id } = useParams();
  const [first, setFirst] = useState([]);
  const [product, setProduct] = useState(null);

  const Items = Serviceapi.find((product) => product.id === parseInt(id));

  const itemAllOver = () => {
    const updatedFirst = first + 1;
    setFirst(updatedFirst);
   
  };

  // Load the product data when the component mounts
  useEffect(() => {
    setProduct(Items);
  }, [Items]);

  return (
    <div>
      <Link to={"/Cart"}></Link>
      {children}
      <div className="relative pt-24">
        {product && (
          <div className="flex gap-10">
            <div className="flex p-5">
              <div className="pl-5">
                <img
                  src={product.i1}
                  alt={product.name}
                  className="w-60 mt-7 mb-10 h-60"
                />
                <img
                  src={product.i2}
                  alt={product.name}
                  className="w-60 mt-10 mb-10 h-60"
                />
              </div>
              <div className="mt-14 mr-10">
                <img
                  src={product.i4}
                  alt={product.name}
                  className="w-96 h-96 mt-10 ml-5 mr-20"
                />
              </div>
              <div className="mt-5">
                <img
                  src={product.i3}
                  alt={product.name}
                  className="w-60 h-60 mt-1 mb-10"
                />
                <img
                  src={product.i5}
                  alt={product.name}
                  className="w-60 h-60 mt-16 mb-10"
                />
              </div>
            </div>
            <div className="flex-col p-5">
              <h1 className="text-3xl font-bold mt-9">{product.name}</h1>
              <br />
              <h2 className="text-xl">
                {product.purchase} | 1000+ answered questions
              </h2>
              <br />
              <h1 className="text-3xl font-bold">₹{product.Price}.00</h1>
              <br />
              <strike className="text-3xl font-bold text-red-600">
                ₹{product.before}
              </strike>
              <br />
              <div className="flex mt-5 gap-14">
                <select id="selectInput" className="cursor-pointer text-xl mt-6">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <Link to="/Cart">
                  <button
                    className="uppercase p-2 hover:bg-[#f63667ff]  cursor-pointer w-44 mt-5 font-semibold text-2xl text-center text-white hover:text-white bg-gray-800"
                    onClick={() => {
                      addtocart(product);
                    }}
                  >
                    ADD TO CART
                  </button>
                </Link>
                <Link to="/buy">
                  <button
                    className="uppercase p-2 hover:bg-[#f63667ff] cursor-pointer w-32 mt-5 font-semibold text-2xl text-center text-white hover:text-white bg-gray-800"
                    onClick={() => {addt(product)}}
                  >
                    BUY NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page ;
