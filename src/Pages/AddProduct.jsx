import React from 'react'
import './CSS/AddProduct.css'
import { FaArrowLeft } from "react-icons/fa";

const AddProduct = () => {
    return (
        <>
            <div className="add-product">
                <div className="product-heading">
                    <div className="product-icon">
                        <FaArrowLeft />
                    </div>
                    <h2> Add Product</h2>
                </div>
                <div className="product-form">
                    <label className='product-label' htmlFor="name">Supplier Name</label>
                    <div className="product-input">
                        <input type="text" placeholder='Enter Your name' required className='product-form-input' />
                    </div>
                    <label className='product-label' htmlFor="location">Location</label>
                    <div className="product-input">
                        <input type="text" placeholder='Choose your location' required className='product-form-input' />
                    </div>
                    <label className='product-label' htmlFor="price">Price</label>
                    <div className="product-input">
                        <input type="text" placeholder='Enter the price' required className='product-form-input' />
                    </div>
                    <label className='product-label' htmlFor="catrgory">Category of water</label>
                    <div className="product-input">
                        <select name="" id="" className='product-form-select'>
                            <option className='select-option'  value="cold">Cold</option>
                            <option className='select-option' value="normal">Normal</option>
                        </select>
                    </div>
                    <label className='product-label' htmlFor="Image"></label>
                    <div className="product-input">
                        <div className='product-form-input'>
                            <input type="file" className='file-input' />
                        </div>
                    </div>
                    <label className='product-label' htmlFor="capacity">Capacity</label>
                    <div className="product-input">
                        <input type="text" placeholder='Enter the capacity' required className='product-form-input' />
                    </div>
                    <div className='add-button'>
                        <button className="product-button">Add Product</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct