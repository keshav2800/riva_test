import React from "react";
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";
import emailjs from 'emailjs-com';
import hero from '../../common/images/heroimg.png';
import rocket from '../../common/images/rocket.png';
import profit from '../../common/images/investment.png';
import world from '../../common/images/earth.png';
import shopping from '../../common/images/online-shopping.png';
import trophy from '../../common/images/trophy.png';

const Hero = ({ t }: { t: TFunction }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email') as string;

        // Send email using EmailJS
        emailjs.sendForm('service_2ygfs6i', 'template_6ry6jql', form, 'SPdECvkw3MKfVtc2T')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('Thank you! Your submission has been received!');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('Oops! Something went wrong while submitting the form.');
            });

        form.reset();
    };

    return (
        <div className="outer-container">
            <div className="hero-container">
                <div className="hero-content-img">
                    <h1 className="hero-heading">Discover top dropshipping suppliers & exporter from organic bharat</h1>
                    <p className="hero-paragraph">Riva Organic, founded in 2023, exports high-quality, naturally processed products like grocery food and dairy products, eco-friendly products cosmetics and pharma supplements agro tools and plants medicine </p>
                    <div className="signup-form-content">
                        <form onSubmit={handleSubmit} className="signup-form" aria-label="Email Form">
                            <input className="input-signup" autoFocus={true} maxLength={256} name="email" placeholder="Enter Your email address…" type="email" id="email" required />
                            <input type="submit" id="btn-email-form" className="primary-button" value="Get started" />
                        </form>
                    </div>
                </div>
                <div className="hero-content-img">
                    <img src={hero} alt="Dropshipping trending products" className="home-hero-image" />
                </div>
            </div>
            <div className="grid-container">
                <div className="feature">
                    <img src={world} alt="Sell with ease" className="feature-icon" />
                    <h2 className="feature-title">Sell With Ease</h2>
                </div>
                <div className="feature">
                    <img src={shopping} alt="Up-to-date inventory" className="feature-icon" />
                    <h2 className="feature-title">Up-to-Date Inventory</h2>
                </div>
                <div className="feature">
                    <img src={trophy} alt="Best quality products" className="feature-icon" />
                    <h2 className="feature-title">Best Quality Products</h2>
                </div>
                <div className="feature">
                    <img src={profit} alt="Great profit margin" className="feature-icon" />
                    <h2 className="feature-title">Great Profit Margin</h2>
                </div>
                <div className="feature">
                    <img src={rocket} alt="Super-fast delivery" className="feature-icon" />
                    <h2 className="feature-title">Super-Fast Delivery</h2>
                </div>
            </div>
        </div>
    );
};

export default withTranslation()(Hero);
