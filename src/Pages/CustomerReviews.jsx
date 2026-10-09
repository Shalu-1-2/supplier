
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
    FiArrowLeft,
    FiMapPin,
    FiCalendar,
    FiMoreVertical
} from "react-icons/fi";
import { MdWaterDrop } from "react-icons/md";

import "../Pages/CSS/CustomerReviews.css";
import BottomBar from "../Components/BottomBar";

const CustomerReviews = () => {
    const navigate = useNavigate();

    const savedSupplier = localStorage.getItem("supplier");
    const supplier = savedSupplier
        ? JSON.parse(savedSupplier)
        : {};

    const reviews = [
        {
            id: 1,
            name: "Amit Singh",
            rating: 5,
            comment:
                "Excellent service and pure water quality. Highly recommended!",
            date: "2 days ago",
            color: "blue"
        },
        {
            id: 2,
            name: "Priya Sharma",
            rating: 4,
            comment:
                "Water quality is good and delivery was on time. Overall a satisfactory experience.",
            date: "4 days ago",
            color: "pink"
        },
        {
            id: 3,
            name: "Rahul Verma",
            rating: 5,
            comment:
                "Very good service. Highly recommended! Keep it up!",
            date: "1 week ago",
            color: "green"
        }
    ];

    const rating = Number(supplier.rating) || 4.5;
    const totalReviews = Number(supplier.reviews) || 120;

    const radius = supplier.supplyRange
        ? /[a-zA-Z]/.test(String(supplier.supplyRange))
            ? supplier.supplyRange
            : `${supplier.supplyRange} km`
        : "10 km";

    const waterTypes = Array.isArray(supplier.waterType) &&
        supplier.waterType.length
        ? supplier.waterType
            .map(type => type.charAt(0).toUpperCase() + type.slice(1))
            .join(", ")
        : "Cold, Normal";

    return (
        <>
            <div className="cr-page">
                <div className="cr-container">

                    <header className="cr-header">
                        <button
                            type="button"
                            className="cr-back"
                            onClick={() => navigate(-1)}
                        >
                            <FiArrowLeft />
                        </button>

                        <div className="cr-header-text">
                            <h2>Customer Reviews</h2>
                            <p>Real feedback from our valued customers</p>
                        </div>
                    </header>

                    <section className="cr-supplier-card">
                        <div className="cr-supplier-main">
                            <div className="cr-supplier-image-wrap">
                                {supplier.image ? (
                                    <img
                                        src={supplier.image}
                                        alt="Supplier"
                                        className="cr-supplier-image"
                                    />
                                ) : (
                                    <MdWaterDrop className="cr-supplier-default" />
                                )}

                                <span className="cr-active-badge">
                                    <span></span>
                                    Active
                                </span>
                            </div>

                            <div className="cr-supplier-info">
                                <h3>
                                    {supplier.businessName || "Mishra Water Supply"}
                                </h3>

                                <div className="cr-rating-summary">
                                    <FaStar className="cr-summary-star" />
                                    <strong>{rating.toFixed(1)}</strong>
                                    <span>({totalReviews} reviews)</span>
                                </div>

                                <p className="cr-supplier-location">
                                    <FiMapPin />
                                    {supplier.location || "Lucknow, Uttar Pradesh"}
                                </p>
                            </div>
                        </div>

                        <div className="cr-supplier-extra">
                            <div className="cr-extra-item">
                                <span className="cr-extra-icon">
                                    <MdWaterDrop />
                                </span>
                                <div>
                                    <p>Supply Radius</p>
                                    <strong>{radius}</strong>
                                </div>
                            </div>

                            <div className="cr-extra-item">
                                <span className="cr-extra-icon">
                                    <MdWaterDrop />
                                </span>
                                <div>
                                    <p>Water Types</p>
                                    <strong>{waterTypes}</strong>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="cr-reviews-heading">
                        <div className="cr-heading-icon">
                            <FaStar />
                        </div>

                        <h3>Customer Reviews</h3>
                        <span>{reviews.length} Reviews</span>
                    </div>

                    <section className="cr-reviews-list">
                        {reviews.map(review => (
                            <article
                                className="cr-review-card"
                                key={review.id}
                            >
                                <div className={`cr-avatar cr-avatar-${review.color}`}>
                                    {review.name.charAt(0)}
                                </div>

                                <div className="cr-review-content">
                                    <div className="cr-review-top">
                                        <h4>{review.name}</h4>

                                        <div className="cr-review-date">
                                            <FiCalendar />
                                            <span>{review.date}</span>
                                        </div>
                                    </div>

                                    <div className="cr-review-rating">
                                        <div className="cr-stars">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <FaStar
                                                    key={star}
                                                    className={
                                                        star <= review.rating
                                                            ? "cr-star-filled"
                                                            : "cr-star-empty"
                                                    }
                                                />
                                            ))}
                                        </div>

                                        <span>{review.rating.toFixed(1)}</span>
                                    </div>

                                    <p className="cr-comment">
                                        {review.comment}
                                    </p>
                                </div>

                                <FiMoreVertical className="cr-review-more" />
                            </article>
                        ))}
                    </section>

                 

                </div>
            </div>

            <BottomBar />
        </>
    );
};

export default CustomerReviews;
