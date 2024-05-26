import React from 'react';
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";
import coverimg from '../../common/images/product_cover_2.png';
import arrow from '../../common/images/arrow.png';


const ProductSection = ({ t }: { t: TFunction }) => {
    return (
        <div className="container">
            <div className="left-column">
                <img
                    src={coverimg}
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
                        src={arrow}
                        alt=""
                        className="cta-icon"
                    />
                </a>
            </div>
        </div>
    );
};

export default withTranslation()(ProductSection);
