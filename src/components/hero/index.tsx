import React from "react";
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";
import hero from '../../common/images/heroimg.png'
import rocket from '../../common/images/rocket.png'
import profit from '../../common/images/investment.png'
import world from '../../common/images/earth.png'
import shopping from '../../common/images/online-shopping.png'
import trophy from '../../common/images/trophy.png'

const Hero = ({ t }: { t: TFunction }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        console.log('Email submitted:', email);
        form.reset();
      };
    
  return (
    // <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
    //     <div className="flex">
    //     {/* Left Side */}
        
    //     <div className="md:w-1/2 flex flex-col items-center justify-center">
    //         {/* Title */}
    //         <h1 className="text-4xl font-bold text-center mb-6">
    //         Welcome to Our Website
    //         </h1>
    //         {/* Body */}
    //         <p className="text-lg text-gray-700 text-center mb-8">
    //         Discover amazing services and products tailored just for you.
    //         </p>
    //         {/* Form */}
    //         <form
    //         className="bg-white shadow-lg rounded-lg p-6 flex items-center w-96"
    //         style={{ maxWidth: "340px", height: "64px" }}
    //         >
    //         <input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="flex-grow outline-none"
    //         />
    //         <button
    //             type="submit"
    //             className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
    //         >
    //             Get Started
    //         </button>
    //         </form>
    //     </div>

    //     {/* Right Side */}
    //     <div className="md:w-1/2 mt-10 md:mt-0 md:ml-10 flex justify-center">
    //         {/* Photo Section (Replace src with your photo URL) */}
    //         <img
    //         src="https://via.placeholder.com/400"
    //         alt="Placeholder"
    //         className="rounded-lg shadow-2xl w-80 h-auto"
    //         />
    //     </div>
    //   </div>
    //   {/* Circular Images with Titles */}
    //   <div className="flex justify-center mt-10 space-x-4">
    //     {[1, 2, 3, 4, 5].map((index) => (
    //       <div
    //         key={index}
    //         className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110"
    //       >
    //         <img
    //           src={`https://via.placeholder.com/100/0000FF/FFFFFF?text=Image${index}`}
    //           alt={`Image ${index}`}
    //           className="rounded-full shadow-xl w-20 h-20 mb-2"
    //         />
    //         <p className="text-sm font-medium">Image {index}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="outer-container">
      <div className="hero-container">
          <div className="hero-content-img">
              <h1 className="hero-heading">Discover top dropshipping suppliers & exporter from organic bharat</h1>
              <p className="hero-paragraph">Riva Organic, founded in 2023, exports high-quality, naturally processed products like grocery food and dairy products, eco-friendly products cosmetics and pharma supplements agro tools  and  plants medicine </p>
              <div className="signup-form-content">
                  <form onSubmit={handleSubmit} className="signup-form" aria-label="Email Form">
                      <input className="input-signup" autoFocus={true} maxLength={256} name="email" placeholder="Enter Your email address…" type="email" id="email" required />
                      <input type="submit" id="btn-email-form" className="primary-button" value="Get started" />
                  </form>
                  {/* <div className="form-done" aria-label="Email Form success">
                      Thank you! Your submission has been received!
                  </div>
                  <div className="form-fail" aria-label="Email Form failure">
                      Oops! Something went wrong while submitting the form.
                  </div> */}
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
