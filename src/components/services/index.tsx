// import React from 'react';
// import './styles.css';
// import { withTranslation, TFunction } from "react-i18next";
// import bulkimage from '../../common/images/bulkexport.png';
// import dropshipimage from '../../common/images/delivery-bag.png';

// const Services = ({ t }: { t: TFunction }) => {
//     return (
//         <div className="partner-container">
//             <div className="partner-category">
//                 <img
//                     src="https://assets-global.website-files.com/5b3213161e5234bf1cfff9e1/61bb3e5ede8e1d9ac74fcbf9_marketing%20apps%20icon.webp"
//                     alt="Data & Analytics"
//                     className="category-image"
//                 />
//                 <div className="category-details">
//                     <div className="category-title">Services</div>
//                     <div className="category-description">
//                     Riva Organic seamlessly connects you with the world's finest organic products through hassle-free dropshipping.
//                     </div>
//                 </div>
//             </div>
//             <div className="partner-list">
//                 <a
//                     href="https://pages.razorpay.com/pl_NtRZCUXCBQds41/view"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="partner-item"
//                 >
//                     <div className="partner-item-image">
//                         <img
//                             src={bulkimage}
//                             alt="bulkimage"
//                             className="partner-image"
//                         />
//                     </div>
//                     <div className="partner-item-details">
//                         <div className="partner-item-title">Bulk Exports</div>
//                         <div className="partner-item-description">
//                         Riva Organic: Empowering businesses with ethically sourced, bulk organic ingredients.
//                         </div>
//                     </div>
//                 </a>
//                 <a
//                     href="https://pages.razorpay.com/pl_NtRZCUXCBQds41/view"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="partner-item"
//                 >
//                     <div className="partner-item-image">
//                         <img
//                             src={dropshipimage}
//                             alt="dropship"
//                             className="partner-image avada-logo"
//                         />
//                     </div>
//                     <div className="partner-item-details">
//                         <div className="partner-item-title">Dropshipping Suppliers</div>
//                         <div className="partner-item-description">
//                         Riva Organic: Simplify your business with organic dropshipping. We source high-quality products globally, so you can focus on branding and sales. Grow organically with Riva.
//                         </div>
//                     </div>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default withTranslation()(Services);


import React from 'react';
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";
import bulkexport from "../../common/images/1.png";
import dropshipping from "../../common/images/2.png";
import { Slide } from "react-awesome-reveal";

const Services = ({ t }: { t: TFunction }) => {
    
    const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
        element.scrollIntoView({
          behavior: "smooth",
        });
    };
    
    return (
        <Slide direction="up" triggerOnce>
            <div className="sourcing-container" id="sourcing">
                <div className="sourcing-content">
                    <div className="sourcing-title">Sourcing</div>
                    <div className="sourcing-description">
                        Riva Organic seamlessly connects you with the world's finest organic products through hassle-free dropshipping.
                    </div>
                </div>
                <div className="sourcing-container-2">
                    <div className="source-card">
                        <div className="image-container">
                            <img className="export-image" alt="export-image" src={bulkexport}/>
                        </div>
                        <div className="export-details">
                            <div className="export-title">Bulk Exports</div>
                            <div className="export-description">
                                Riva Organic exports bulk natural and organic products, including spices, herbs, essential oils, and various agricultural goods.
                            </div>
                        </div>
                        <a href="https://pages.razorpay.com/pl_NtRZCUXCBQds41/view" className="explore-button">
                            <div className="explore-text">Create Order</div>
                            <img className="explore-arrow" alt="rivaorganicRightArrow" src="data:image/svg+xml,%3Csvg width='11' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5833 3.00333C10.7154 2.87124 10.7154 2.65708 10.5833 2.52499L8.43083 0.372475C8.29874 0.240386 8.08458 0.240386 7.95249 0.372475C7.8204 0.504565 7.8204 0.718723 7.95249 0.850812L9.86584 2.76416L7.95249 4.67751C7.8204 4.8096 7.8204 5.02376 7.95249 5.15584C8.08458 5.28793 8.29874 5.28793 8.43083 5.15584L10.5833 3.00333ZM0.861694 3.1024H10.3442V2.42592H0.861694V3.1024Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A" />
                        </a>
                    </div>
                    <div className="source-card">
                        <div className="image-container">
                            <img className="export-image" alt="dropshipping" src={dropshipping}/>
                        </div>
                        <div className="export-details">
                            <div className="export-title">Dropshipping Suppliers</div>
                            <div className="export-description">
                                Riva Organic is a top dropshipping supplier of natural and organic products for e-commerce businesses in health, wellness, and sustainability.
                            </div>
                        </div>
                        <a href="https://pages.razorpay.com/pl_NtRZCUXCBQds41/view" className="explore-button">
                            <div className="explore-text">Create Order</div>
                            <img className="explore-arrow" alt="airblackRightArrow" src="data:image/svg+xml,%3Csvg width='11' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5833 3.00333C10.7154 2.87124 10.7154 2.65708 10.5833 2.52499L8.43083 0.372475C8.29874 0.240386 8.08458 0.240386 7.95249 0.372475C7.8204 0.504565 7.8204 0.718723 7.95249 0.850812L9.86584 2.76416L7.95249 4.67751C7.8204 4.8096 7.8204 5.02376 7.95249 5.15584C8.08458 5.28793 8.29874 5.28793 8.43083 5.15584L10.5833 3.00333ZM0.861694 3.1024H10.3442V2.42592H0.861694V3.1024Z' fill='%23F5F5F5'/%3E%3C/svg%3E%0A" />
                        </a>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default withTranslation()(Services);

