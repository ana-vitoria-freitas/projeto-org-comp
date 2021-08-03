import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">

        <a href="https://github.com/ana-vitoria-freitas">
          <FaGithub size="40"  color="black"/>
        </a>

        <p className="footer__copyright">Criado, planejado e escrito por <FaHeart color="#B51942"/> Ana Vitória Gouvêa de Oliveira Freitas</p>

        <a href="https://www.linkedin.com/in/ana-vit%C3%B3ria-gouv%C3%AAa-de-oliveira-freitas/">
          <FaLinkedin size="40"  color="black"/>
        </a>

      </div>
    </footer>

  );
}

export default Footer;