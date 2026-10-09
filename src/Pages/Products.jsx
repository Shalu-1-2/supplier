import React, { useEffect, useState } from 'react'
import BottomBar from '../Components/BottomBar'
import "../Pages/CSS/Products.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const savedProducts =
      JSON.parse(localStorage.getItem("jalmitraProducts")) || [];

    setProducts(savedProducts);

  }, []);

  return (
    <>
      <div className="home-header-top">

        <h3>Products</h3>

        <NavLink className="header-icon">
          <IoMdNotificationsOutline />
        </NavLink>

      </div>

      <div className="myproduct-outer">

        <h2>My Products</h2>

        <NavLink
          to="/add-product"
          className="add-product-btn"
        >
          <FaPlus />
          Add Product
        </NavLink>

      </div>

      {products.length === 0 ? (

        <div className="no-product">

          <h3>No Products Added</h3>

          <p>
            Add your first water product to start selling.
          </p>

          <NavLink
            to="/add-product"
            className="add-product-btn"
          >
            <FaPlus />
            Add Product
          </NavLink>

        </div>

      ) : (

        <div className="my-products-supply">

          {products.map((product) => (

            <div
              className="my-products-card"
              key={product.id}
            >

              <div className="my-product-img">

                <img
                  src={
                    product.image
                      ? product.image
                      : "./water-bottle.png"
                  }
                  alt={product.productName}
                />

              </div>

              <div className="product-supply">

                <h3>{product.productName}</h3>

                <p>₹{product.price}</p>

                <p>
                  Water Type:{" "}
                  {Array.isArray(product.waterType)
                    ? product.waterType.join(", ")
                    : product.waterType}
                </p>

                <p>
                  Capacity: {product.capacity}
                </p>

                <div className="my-product-price">

                  <p>
                    Stock: {product.stock}
                  </p>

                  <NavLink
                    to={`/edit-product/${product.id}`}
                    className="my-products-edit"
                  >
                    Edit
                  </NavLink>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

      <BottomBar />

    </>
  )
}

export default Products