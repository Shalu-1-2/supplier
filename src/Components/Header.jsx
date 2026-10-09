
import React from "react";
import "../Components/CSS/Header.css";

const Header = () => {
    return (
        <header className="jalmitra-header">
            <div className="jalmitra-header-content">
                <div className="jalmitra-brand">
                    <div className="jalmitra-logo">
                        💧
                    </div>

                    <div className="jalmitra-brand-name">
                        <h1>JalMitra</h1>
                        <p>Supplier Panel</p>
                    </div>
                </div>

                <div className="jalmitra-header-divider"></div>

                <div className="jalmitra-tagline">
                    <h3>Clean Water</h3>
                    <p>Better Tomorrow</p>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;