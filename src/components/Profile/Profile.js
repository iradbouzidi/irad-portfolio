import React from "react";
import { Typography } from "@material-ui/core";
import irad from "../../assets/images/irad.jpg";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Irad</Typography>
        <Typography className="title">Irad</Typography>
      </div>

      <figure className="profile_image">
        <img src={irad} alt="irad" />
      </figure>

      <div className="profile_information">
        Insert Timeline
        <br />
        <button>any button</button>
      </div>
    </div>
  );
}

export default Profile;
