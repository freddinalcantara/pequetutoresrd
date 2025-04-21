import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="text-center py-6 mt-10"
      style={{
        // color pastel suave
        borderTop: "4px solid #182e49",
        marginTop: "100px",
      }}
    >
      {/* <div className="text-lg text-[#182e49] font-semibold mb-3">
        🌈✨📖🐻🧁⭐
      </div> */}

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-[#182e49] font-medium text-sm">
        <Link to="/privacidad" className="hover:underline">
          🛡️ Política de Privacidad
        </Link>
        <Link to="/contacto" className="hover:underline">
          ✉️ Contacto
        </Link>
      </div>

      <div className="mt-4 text-sm text-[#182e49]">
        📚 Hecho con cariño para pequeños lectores 💖
      </div>
    </footer>
  );
};

export default Footer;
