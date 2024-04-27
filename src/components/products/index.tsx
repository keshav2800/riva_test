import React from 'react';
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";

const ProductSection = ({ t }: { t: TFunction }) => {
    return (
        <div className="container">
            <div className="left-column">
                <img
                    src="https://assets-global.website-files.com/5b3213161e5234bf1cfff9e1/625648929107cd4a772b7f60_winning-dropshipping-products.webp"
                    alt="Find winning products"
                    className="image"
                />
            </div>
            <div className="right-column">
                <h2 className="section-title">Find winning dropshipping products</h2>
                <p className="section-paragraph">
                    Riva Organic allows you to choose the best products to dropship from various categories from dropshipping suppliers all over the world.
                </p>
                <a
                    href="https://rivaorganicdropship.solutions/winning-product"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-container"
                >
                    <div className="cta-text">Get started</div>
                    <img
                        src="https://assets-global.website-files.com/5b3213161e5234bf1cfff9e1/5f63d91a591fe77c25d54de2_right-arrow.svg"
                        alt=""
                        className="cta-icon"
                    />
                </a>
            </div>
        </div>
    );
};

export default withTranslation()(ProductSection);
