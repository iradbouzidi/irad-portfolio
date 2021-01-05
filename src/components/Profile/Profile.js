import React from "react";
import { Typography } from "@material-ui/core";
import CustomTimeline, {
  CustomTimelineSeperator,
} from "../CustomTimeline/CustomTimeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import irad from "../../assets/images/irad.jpg";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../CustomButton/CustomButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import resumeData from "../../utils/resumeData";
import "./Profile.css";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeperator />
    <TimelineContent>
      {link ? (
        <Typography className={"timelineItem_text"}>
          <span>{title}: </span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className={"timelineItem_text"}>
          <span>{title}: </span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

function Profile() {
  return (
    <div className="profile container_shadow fixed">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={irad} alt="irad" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Birthday" text={resumeData.birthday} />
          <a href={`mailto:${resumeData.email}?subject="Working Purposes"}`}>
            <CustomTimelineItem title="Email" text={resumeData.email} />
          </a>

          <CustomTimelineItem title="Address" text={resumeData.address} />
          <CustomTimelineItem title="Phone" text={resumeData.phone} />
        </CustomTimeline>
        <div className={"button_container"}>
          <a href="https://drive.google.com/uc?export=download&id=1VRljVj6XuaEdGHwRQKtO_YtNWabW8pkG">
            <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
