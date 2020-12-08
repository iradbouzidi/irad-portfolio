import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  GitHub,
  WebOutlined,
  Language,
  Memory,
  Nfc,
} from "@material-ui/icons";

export default {
  name: "Irad Bouzidi",
  title: "IoT Engineer & Full Stack Developer",
  birthday: "19th June 1994",
  email: "irad.bouzidi@esprit.tn",
  address: "Ariana, Tunisia",
  phone: "+216 53 774 305",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/b.irad1994",
      text: "/b.irad1994",
      icon: <Facebook />,
    },
    Instagram: {
      link: "https://www.instagram.com/iradove_xo",
      text: "/iradove_xo",
      icon: <Instagram />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/irad-bouzidi",
      text: "/irad-bouzidi",
      icon: <LinkedIn />,
    },
    GitHub: {
      link: "https://github.com/iradbouzidi",
      text: "/iradbouzidi",
      icon: <GitHub />,
    },
    Telegram: {
      link: "https://t.me/irad_bouzidi",
    },
  },

  about_me:
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit guy cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate." +
    "\n\n" +
    "Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.",

  experiences: [
    {
      title: "Technician Internship at Peta Technology",
      description:
        "• Artificial Intelligence and Machine Learning model for vehicle journey cost prediction (Cross Validation and Grid Search).",
      date: "07/2019 - 09/2019",
    },
    {
      title:
        "End of Study Project Internship at University of Sciences and Techniques of Sidi Bouzid",
      description:
        "• Specific model for biopsy images classification based on InceptionV3 (Tensorflow).",
      date: "02/2017 - 07/2017",
    },
    {
      title: "Technician Internship at Regional Hospital",
      description:
        "• Maintenance of the establishment's medical platform and installation of a storage backup server.",
      date: "05/2017 - 07/2017",
    },
  ],

  educations: [
    {
      title: "Engineering National Diploma",
      description:
        "• National Diploma in Information Technology Engineering (Internet of Things) from Private Higher School of Engineering and Technology (ESPRIT)",
      date: "09/2017 - Present",
    },

    {
      title: "Bachelor Degree",
      description:
        "• Bachelor Degree in Information Technology from University of Sciences and Techniques of Sidi Bouzid.",
      date: "09/2013 - 06/2017",
    },
    {
      title: "National High School Diploma",
      description:
        "• National High School Diploma in Computer Science from April 9, 1938 high school.",
      date: "2000 - 2003",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been working on web design for 5 years.",
      icon: <WebOutlined />,
    },
    {
      title: "Internet of Things",
      description: "I have been working on web design for 2 years.",
      icon: <Nfc />,
    },
    {
      title: "Machine Learning",
      description:
        "I've been wroking with AI/ML/DL models for the last 3 years.",
      icon: <Memory />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "JavaScript",
        "TypeScript",
        "Angular",
        "ReactJS",
        "Bootstrap",
        "Material-UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Java", "Python", "PHP", "Symfony"],
    },
    {
      title: "DATABASES",
      description: ["Oracle", "MySQL", "Ms SQL Server", "MongoDB", "Firebase"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "SCRUM/Agile"],
    },
    {
      title: "INTERNET OF THINGS",
      description: [
        "IoT Networks",
        "IoT Privacy & Security",
        "Next-Gen Networks",
        "IoT UX",
        "4G Dim & Plan",
      ],
    },
    {
      title: "APPROACHES",
      description: [
        "Distibuted Computing",
        "Big Data Analytics",
        "Machine Learning",
      ],
    },
    {
      title: "DevOps",
      description: ["Dockerization", "Microservices", "Network Virtualization"],
    },

    {
      title: "NETWORKS",
      description: [
        "Cellular Network",
        "Wireless Sensor Network",
        "Software-Defined Networks",
        "Radio-Frequency IDentification",
      ],
    },
    {
      title: "OPERATING SYSTEMS",
      description: ["Linux", "Unix", "Embedded Linux"],
    },
    {
      title: "PROBLEM SOLVING",
      description: ["Graph Theory", "Linear Programming"],
    },
    {
      title: "DIGITAL SIGNALS",
      description: ["Signal Tr/Tx", "Signal Processing"],
    },
  ],

  projects: [
    //#region MEAN Stack Projects
    //#region Project Task Manager App
    {
      tag: "MEAN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1AGEkWq7ybkdkF92Tppq-cnCARzU3Kziy",
      title: "Smart Trash Monitoring",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/smart-trash-monitoring",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#region Project Task Manager App
    {
      tag: "MEAN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1mbB05N3bTnhy0Z73mv577f-56AFfqJaL",
      title: "Task Manager App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/smart-trash-monitoring",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MERN Stack Projects
    //#region Project Smart Trash Monitoring App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1hHjMIkF9j56ki0gCso4uHQdfBfZbo-g5",
      title: "Smart Trash Monitoring",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/smart-trash-monitoring",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region React JS Projects
    //#region Project Portfolio App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=16Ulse69A3mWMVRTEdijnjL7DCGvh-aaD",
      title: "Protfolio",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/irad-portfolio",
          icon: <GitHub />,
        },
        {
          link: "https://irad-portfolio.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1DQe3cFLZr2bLAwXhLkBbsaEA7ZOP-XLp",
      title: "Covid 19 Tracker App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-covid19-tracker-app",
          icon: <GitHub />,
        },
        {
          link: "https://covid19-tracker-app-irad.web.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Amazon Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1Z1QuipHNJtNR5CcQ6JCkpa7JtruezK8t",
      title: "Amazon Clone App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-amazon-app",
          icon: <GitHub />,
        },
        { link: "https://clone-irad-682e5.web.app/", icon: <Language /> },
      ],
    },
    //#endregion

    //#region Project Netflix Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1Np9eLWkXis0uXDv0gTJjvMp9objJyCv2",
      title: "Netflix Clone App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-netfix-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-netflix-app-2f86a.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Face Landmark Detection App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1nZTMpQA8Wj1jiuQTuAJIWjSvBsWw0CzS",
      title: "Face Landmark Detection App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link:
            "https://github.com/iradbouzidi/react-tfjs-face-landmark-detection-app  ",
          icon: <GitHub />,
        },
        {
          link: "https://react-tfjs-face-lm-detect-app.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Thumbnail App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1h13sDJNdLzjJr9rR0toJTVCvwj5TAdhV",
      title: "Youtube Thumbnail App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-youtube-thumbnail-app",
          icon: <GitHub />,
        },
        {
          link: "https://thumbnail-app-irad.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Instagram Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1aN7EJK-h6R0692Rg01xAh5rqcnVBEjsC",
      title: "Instagram Clone App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-instagram-app",
          icon: <GitHub />,
        },
        {
          link: "https://facebook-instagram-clone-9c07c.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Messenger Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1s98XVi3SGSIQTvEJB0cMUVnKMV9P07aR",
      title: "Messenger Clone App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-messenger-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-messenger-app-d200c.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project To-Do App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1XY7-DH85o89vMKu_Zj51z2tK0pNRoGkd",
      title: "To-Do App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-todo-app",
          icon: <GitHub />,
        },
        {
          link: "https://todo-app-irad-51a26.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Tinder Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1onCwtSm2xH8XVEDRepozqx7Di8OeH-Q_",
      title: "Tinder Clone App",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-tinder-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-tinder-app-30619.web.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region Python Projects
    //#region Project Amazon Price Tracker
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1Q7CcvIIVbhBH7aHayC1u2i5itlfnV_N8",
      title: "Amazon Price Tracker",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/python-amazon-price-tracker",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Amazon Price Tracker
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1szlZpLfgkU322kVeSY9cyYGDaGQlp2xj",
      title: "Car and Pedestrian Tracking Script",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/python-opencv-tracking",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Face Detector Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1ZPY-bezGjyPAmcJmfKwgvUJAA2WZxp-H",
      title: "Face Detector Script",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/python-opencv-face-detector",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Smile Detector Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1nPrUjhYEbwtLYidi2o5bSkGCmG1NuSJo",
      title: "Smile Detector Script",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/python-opencv-smile-detector",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion

    //#region Project Snake Game Script
    {
      tag: "Python",
      image:
        "https://drive.google.com/uc?export=download&id=1XM63hvIgMRc81mLAn3lxgwf9DFZCn3_n",
      title: "Snake Game Script",
      caption: "short desc",
      description: "This is my project description",
      links: [
        {
          link: "https://github.com/iradbouzidi/python-snake-game",
          icon: <GitHub />,
        },
      ],
    },
    //#endregion
    //#endregion
  ],
};
