import React from "react";
import "../../src/assets/css/Footer.css";
import logo from "../assets/img/logo_footer.png";

const Footer = () => {
  return (
    <footer>
      <div id="container-footer">
        <div class="content-footer">
          <small>
            &#169; data Dot.Lib | Todos os direitos reservados | Todos los
            dereshos reservados | All rights reserved
          </small>
        </div>
        <div class="logo-footer">
          <a to="/">
            <img src={logo} alt="Blog Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
