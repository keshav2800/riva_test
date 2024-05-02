import React from 'react';
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";
import bulkimage from '../../common/images/bulkexport.png';
import dropshipimage from '../../common/images/delivery-bag.png';

const Services = ({ t }: { t: TFunction }) => {
    return (
        <div className="partner-container">
            <div className="partner-category">
                <img
                    src="https://assets-global.website-files.com/5b3213161e5234bf1cfff9e1/61bb3e5ede8e1d9ac74fcbf9_marketing%20apps%20icon.webp"
                    alt="Data & Analytics"
                    className="category-image"
                />
                <div className="category-details">
                    <div className="category-title">Services</div>
                    <div className="category-description">
                    Riva Organic seamlessly connects you with the world's finest organic products through hassle-free dropshipping.
                    </div>
                </div>
            </div>
            <div className="partner-list">
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-item"
                >
                    <div className="partner-item-image">
                        <img
                            src={bulkimage}
                            alt="bulkimage"
                            className="partner-image"
                        />
                    </div>
                    <div className="partner-item-details">
                        <div className="partner-item-title">Bulk Exports</div>
                        <div className="partner-item-description">
                        Riva Organic: Empowering businesses with ethically sourced, bulk organic ingredients.
                        </div>
                    </div>
                </a>
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="partner-item"
                >
                    <div className="partner-item-image">
                        <img
                            src={dropshipimage}
                            alt="dropship"
                            className="partner-image avada-logo"
                        />
                    </div>
                    <div className="partner-item-details">
                        <div className="partner-item-title">Dropshipping Suppliers</div>
                        <div className="partner-item-description">
                        Riva Organic: Simplify your business with organic dropshipping. We source high-quality products globally, so you can focus on branding and sales. Grow organically with Riva.
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default withTranslation()(Services);
