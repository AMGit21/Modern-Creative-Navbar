import { stylePage, footer, mailLinkStyle } from "./stylePage.js";
import "./scrollDown.css";

const Contact = () => {
  return (
    <div className="middle">
      <div className="scrolldown">
        <div className="chevrons">
          <div className="chevrondown"></div>
          <div className="chevrondown"></div>
        </div>
      </div>
      <div style={stylePage}>
        <h1>Contact Us Page</h1>
        <div style={footer}>
          <p>
            Copyright © 2023 -{" "}
            <a style={mailLinkStyle} href="mailto:alimantache1994@gmail.com">
              Ali Mantache
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
