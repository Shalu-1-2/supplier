import React, { useState } from "react";
import "./CSS/AddProduct.css";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const AddProduct = () => {

    const navigate = useNavigate();

    // Product fields
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [waterType, setWaterType] = useState([]);
    const [capacity, setCapacity] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");

    // Water type select/deselect
    const handleWaterType = (type) => {

        if (waterType.includes(type)) {

            setWaterType(
                waterType.filter((item) => item !== type)
            );

        } else {

            setWaterType(
                [...waterType, type]
            );

        }
    };


    // Image select
    const handleImage = (e) => {

        const file = e.target.files[0];

        if (file) {

            const reader = new FileReader();

            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };


    // Add Product
    const handleSubmit = (e) => {

        e.preventDefault();

        // Basic validation
        if (
            !productName ||
            !price ||
            waterType.length === 0 ||
            !capacity ||
            !stock
        ) {
            alert("Please fill all product details");
            return;
        }


        const newProduct = {

            id: Date.now(),

            productName: productName,

            price: price,

            waterType: waterType,

            capacity: capacity,

            stock: stock,

            image: image
        };


        // Old products get from localStorage
        const oldProducts =
            JSON.parse(localStorage.getItem("jalmitraProducts")) || [];


        // New product add
        const updatedProducts = [
            ...oldProducts,
            newProduct
        ];


        // Save products
        localStorage.setItem(
            "jalmitraProducts",
            JSON.stringify(updatedProducts)
        );


        alert("Product added successfully!");


        // Products page par bhej do
        navigate("/products");
    };


    return (
        <div className="add-product">

            {/* Heading */}

            <div className="product-heading">

                <div className="product-icon">

                    <NavLink to="/products">
                        <FaArrowLeft />
                    </NavLink>

                </div>

                <h2>Add Product</h2>

            </div>


            {/* Form */}

            <form
                className="product-form"
                onSubmit={handleSubmit}
            >

                {/* Product Name */}

                <label className="product-label">
                    Product Name
                </label>

                <div className="product-input">

                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="product-form-input"
                        value={productName}
                        onChange={(e) =>
                            setProductName(e.target.value)
                        }
                    />

                </div>


                {/* Price */}

                <label className="product-label">
                    Price
                </label>

                <div className="product-input">

                    <input
                        type="number"
                        placeholder="Enter price"
                        className="product-form-input"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                    />

                </div>


                {/* Water Type */}

                <label className="product-label">
                    Water Type
                </label>

                <div className="water-type-box">

                    <label
                        className={
                            waterType.includes("Cold")
                                ? "water-check active"
                                : "water-check"
                        }
                    >

                        <input
                            type="checkbox"
                            checked={waterType.includes("Cold")}
                            onChange={() =>
                                handleWaterType("Cold")
                            }
                        />

                        <span>Cold Water</span>

                    </label>


                    <label
                        className={
                            waterType.includes("Normal")
                                ? "water-check active"
                                : "water-check"
                        }
                    >

                        <input
                            type="checkbox"
                            checked={waterType.includes("Normal")}
                            onChange={() =>
                                handleWaterType("Normal")
                            }
                        />

                        <span>Normal Water</span>

                    </label>

                </div>


                {/* Capacity */}

                <label className="product-label">
                    Capacity
                </label>

                <div className="product-input">

                    <input
                        type="text"
                        placeholder="Example: 20 Litre"
                        className="product-form-input"
                        value={capacity}
                        onChange={(e) =>
                            setCapacity(e.target.value)
                        }
                    />

                </div>


                {/* Stock */}

                <label className="product-label">
                    Available Stock
                </label>

                <div className="product-input">

                    <input
                        type="number"
                        placeholder="Enter available stock"
                        className="product-form-input"
                        value={stock}
                        onChange={(e) =>
                            setStock(e.target.value)
                        }
                    />

                </div>


                {/* Image */}

                <label className="product-label">
                    Product Image
                </label>

                <div className="product-input">

                    <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={handleImage}
                    />

                </div>


                {/* Image Preview */}

                {image && (

                    <div className="image-preview">

                        <img
                            src={image}
                            alt="Product Preview"
                        />

                    </div>

                )}


                {/* Button */}

                <div className="add-button">

                    <button
                        type="submit"
                        className="product-button"
                    >
                        Add Product
                    </button>

                </div>

            </form>

        </div>
    );
};

export default AddProduct;