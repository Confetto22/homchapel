import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <Link
      to={"https://wa.me/233244496968"}
      target="_blank"
      aria-label="Send Message Via WhatsApp"
    >
      <button className="contact_widget" aria-label="WhatsApp Button">
        <FaWhatsapp />
      </button>
    </Link>
  );
};

export default Widget;
