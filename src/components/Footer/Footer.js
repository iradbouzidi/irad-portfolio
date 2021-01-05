import React from "react";
import { Button, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
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
          .{" "}
          <Button
            className={"scrollUp_btn"}
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            <ArrowUpwardIcon />
          </Button>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
