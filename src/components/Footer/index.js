import React from "react";

const Footer = (props) => {
  const data = props.footerData;
  return (
    <footer id="footer">
      <img
        src="assets/images/footer-image.svg"
        className="footer-circular"
        alt="Footer logo"
      />
      <div className="container">
        <div className="footer-content">
          <img src="assets/images/logo.png" alt="Syed Akhter" />
          <h3 className="animation_title">
            <a href="mailto:syedakhtar.work@gmail.com">{data.acf?.email}</a>
          </h3>
          <p>{data.acf?.footer_description}</p>
        </div>
      </div>
      <div className="copy-rights">
        <div className="container">
          <p>Copyright © 2021 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
