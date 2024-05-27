import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';
import { withTranslation, TFunction } from "react-i18next";

const testimonials = [
  {
    quote: "Riva Organic is a very good platform",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial7_p1fjpr.webp"
  },
  {
    quote: "Best Online Exporter",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034060/website-static-assets/Project%20Website/Homepage/testimonial8_boazsu.webp"
  },
  {
    quote: "I have started my business with Riva Organic",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034060/website-static-assets/Project%20Website/Homepage/testimonial9_f6q3fr.webp"
  },
  {
    quote: "Increased my confidence",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial_lkbr3n.webp"
  },
  {
    quote: "Trustworthy place",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial2_jl3wcz.webp"
  },
  {
    quote: "Amazing Products",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial4_dirljh.webp"
  },
  {
    quote: "Best Exporter around the Globe",
    image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial5_amidvk.webp"
  },
//   {
//     quote: "Solves doubts with patience",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial6_s14tgs.webp"
//   }
];

const Testimonials = ({ t }: { t: TFunction }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
        ],
      };
    
      return (
        <div className="testimonial-section">
            <div className="testimonial-heading">What our Buyers say</div>
                <div className="testimonial-slider">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <img src={testimonial.image} alt="testimonial" className="testimonial-image" />
                    </div>
                    ))}
                </Slider>
                </div>
        </div>
      );
    };
    

export default withTranslation()(Testimonials);

// import React, { useState, useEffect } from 'react';
// import './styles.css';

// const testimonials = [
//   {
//     quote: "Airblack is a very good platform",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial7_p1fjpr.webp",
//   },
//   {
//     quote: "Best Online Learning Academy",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034060/website-static-assets/Project%20Website/Homepage/testimonial8_boazsu.webp",
//   },
//   {
//     quote: "I have started teaching others now",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034060/website-static-assets/Project%20Website/Homepage/testimonial9_f6q3fr.webp",
//   },
//   {
//     quote: "Increased my confidence",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial_lkbr3n.webp",
//   },
//   {
//     quote: "Trustworthy place",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial2_jl3wcz.webp",
//   },
//   {
//     quote: "Airblack guides very well",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial4_dirljh.webp",
//   },
//   {
//     quote: "Airblack enhances skills",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial5_amidvk.webp",
//   },
//   {
//     quote: "Solves doubts with patience",
//     image: "https://res.cloudinary.com/dtks0l86r/image/upload/v1688034059/website-static-assets/Project%20Website/Homepage/testimonial6_s14tgs.webp",
//   },
// ];

// const TestimonialSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="testimonial-section">
//       <div className="testimonial-heading">What our students say</div>
//       <div className="testimonial-slider">
//         {testimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             <div className="testimonial-quote">“{testimonial.quote}”</div>
//             <img
//               className="testimonial-image"
//               src={testimonial.image}
//               alt="testimonial"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;
