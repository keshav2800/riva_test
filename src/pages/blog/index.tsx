import { lazy } from "react";
import ContactContent from "../../content/ContactContent.json";
const Contact = lazy(() => import("../../components/ContactForm"));


const blog = () => {
    return (
      
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
    );
  };
  
  export default blog;
  