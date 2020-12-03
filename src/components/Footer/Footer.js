import React from "react";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";


import "./Footer.css";

function Footer() {
  return (
    <div className={"footer"}>
      <div className="footer_left">
        <Typography className="footer_name">
          {resumeData.name}
          <small> - IoT Engineer & Full Stack Developer</small>
        </Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Background from {""}
          <a href="https://www.instagram.com/zs.panda/" target="_blank">
            Panda ZS
          </a>{" "}
          by {""}
          <a href="https://www.instagram.com/zina.hendrixx/" target="_blank">
            Zina Sayari
          </a>
          .
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
