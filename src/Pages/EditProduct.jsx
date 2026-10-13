
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import "../Pages/CSS/EditProduct.css";
import BottomBar from "../Components/BottomBar";

const EditProduct = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [waterType, setWaterType] = useState([]);
    const [capacity, setCapacity] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {

        const products =
            JSON.parse(localStorage.getItem("jalmitraProducts")) || [];

        const product = products.find(
            (item) => item.id.toString() === id
        );

        if (product) {
            setProductName(product.productName);
            setPrice(product.price);
            setWaterType(product.waterType || []);
            setCapacity(product.capacity);
            setStock(product.stock);
            setImage(product.image || "");
        }

    }, [id]);


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


    const handleUpdate = (e) => {

        e.preventDefault();

        if (
            !productName.trim() ||
            price === "" ||
            Number(price) <= 0 ||
            waterType.length === 0 ||
            !capacity.trim() ||
            stock === "" ||
            Number(stock) < 0
        ) {
            alert("Please fill all product details correctly");
            return;
        }

        const products =
            JSON.parse(localStorage.getItem("jalmitraProducts")) || [];

        const updatedProducts = products.map((product) => {

            if (product.id.toString() === id) {
                return {
                    ...product,
                    productName: productName,
                    price: price,
                    waterType: waterType,
                    capacity: capacity,
                    stock: stock,
                    image: image
                };
            }

            return product;

        });

        localStorage.setItem(
            "jalmitraProducts",
            JSON.stringify(updatedProducts)
        );

        alert("Product updated successfully!");

        navigate("/products");

    };


    return (
       <>
        <div className="edit-product">

            <div className="edit-product-heading">

                <NavLink to="/products">
                    <FaArrowLeft />
                </NavLink>

                <h2>Edit Product</h2>

            </div>


            <form
                className="edit-product-form"
                onSubmit={handleUpdate}
            >

                <label>Product Name:</label>

                <input
                    type="text"
                    value={productName}
                    onChange={(e) =>
                        setProductName(e.target.value)
                    }
                    required
                />


                <label>Price:</label>

                <input
                    type="number"
                    min="1"
                    value={price}
                    onChange={(e) =>
                        setPrice(e.target.value)
                    }
                    required
                />


                <label>Water Type:</label>

                <div className="edit-water-type">

                    <label>
                        <input
                            type="checkbox"
                            checked={waterType.includes("Cold")}
                            onChange={() =>
                                handleWaterType("Cold")
                            }
                        />
                        Cold Water
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={waterType.includes("Normal")}
                            onChange={() =>
                                handleWaterType("Normal")
                            }
                        />
                        Normal Water
                    </label>

                </div>


                <label>Capacity:</label>

                <input
                    type="text"
                    value={capacity}
                    onChange={(e) =>
                        setCapacity(e.target.value)
                    }
                    required
                />


                <label>Available Stock:</label>

                <input
                    type="number"
                    min="0"
                    value={stock}
                    onChange={(e) =>
                        setStock(e.target.value)
                    }
                    required
                />


                <label>Product Image:</label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                />


                {image && (
                    <div className="edit-image-preview">
                        <img
                            src={image}
                            alt="Product Preview"
                        />
                    </div>
                )}


                <button type="submit">
                    Update Product
                </button>

            </form>

        </div>
        <BottomBar/>
       </>
    );

};

export default EditProduct;