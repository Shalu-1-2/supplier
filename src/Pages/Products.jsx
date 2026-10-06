import React from 'react'
import BottomBar from '../Components/BottomBar'
import AddProduct from './AddProduct'
import "../Pages/CSS/Products.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";

const Products = () => {

  const product = [
    {
      id:"1",
      name:"20 Litre Bar",
      price:35,
      stock:50,
      image:"./water-bottle.png"
    }  
  ]

 
  return (
  <>
 <div className="home-header-top">
        <h3>Products</h3>
        
          <NavLink className='header-icon'><IoMdNotificationsOutline/> </NavLink>
     
      </div>

      <div className="myproduct-outer">
        <h2>My Products</h2>
       <NavLink to='/add-product' className='add-product-btn'> <FaPlus/> Add Products</NavLink>
      </div>

      <div className="my-products-supply">
        {product.map((products) => (
          <div className="my-products-card" key={products.id}>
            <div className="my-product-img">
          <img src={products.image} alt="" />
        </div>
        <div className="product-supply">
          <h3>{products.name}</h3>
          <p> ₹{products.price}</p>
          <div className="my-product-price">
            <p>Stock:{products.stock}</p>
            <NavLink className='my-products-edit'>Edit</NavLink>
          </div>
        </div>
          </div>
        ))}
      </div>
 

<BottomBar/>
  
  </>
  )
}

export default Products
