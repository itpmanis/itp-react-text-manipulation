import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = (props) => {
  const buttonOutlineClass =
    props.mode === "light" ? "btn-outline-dark" : "btn-outline-light";
  return (
    <footer className={`bg-${props.mode} text-center text-${props.mode}`}>
      <div
        className="container-fluid p-2"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        <section className="mb-1">
          <a
            className={`btn ${buttonOutlineClass} btn-floating m-1`}
            href="mailto:itp.manis@gmail.com"
            role="button"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a
            className={`btn ${buttonOutlineClass} btn-floating m-1`}
            href="https://www.instagram.com/itp.manis/"
            role="button"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            className={`btn ${buttonOutlineClass} btn-floating m-1`}
            href="https://www.linkedin.com/in/itpmanis/"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            className={`btn ${buttonOutlineClass} btn-floating m-1`}
            href="https://github.com/itpmanis"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
      </div>
      <div
        className={`text-center p-1 ${buttonOutlineClass}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
      >
        © 2023, made with ❤️ by Itp Manish.
      </div>
    </footer>
  );
};

export default Footer;
