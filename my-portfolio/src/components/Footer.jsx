import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="end">
      Copyright © 2020 Yoleamayers
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/yoleamayers"
      >
        {" "}
        <img
          src="https://imgur.com/nIfOFSN.png"
          height="18"
          width="20"
          alt="ff"
        />{" "}
      </a>
      <a className="contact-link" href="https://github.com/ymayers/">
        {" "}
        <img
          src="https://imgur.com/tMWkbtZ.png"
          height="18"
          width="20"
          alt="ff"
        />{" "}
      </a>
      <a className="contact-link" href="mailto:yoleamayers@gmail.com">
        <img
          src="https://imgur.com/iqVkRRS.png"
          height="15"
          width="20"
          alt="ff"
        />
      </a>
    </section>
  );
}

export default Footer;
