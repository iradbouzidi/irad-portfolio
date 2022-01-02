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

// eslint-disable-next-line
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
    "Hello Visitor 🙂 !" +
    "\n\n" +
    "I am Irad Bouzidi a Tunisian Junior Software Engineer. I am 27 years old, the older brother for three sisters, raised in a happy and lovely family." +
    "\n\n" +
    "My passion with IT and Computers started since i was 13 years old. Started working with sample HTML and CSS websites and gathering more technical skills through time in order to advance in my career. Now as my academic cursus I am doing telecommunications engineering and specialized in IoT (Internet of Things) and wireless networks. Add to that I am a solo learner for programming languages and an Artificial Intelligence, Machine Learning and Deep Learning enthusiast." +
    "\n\n" +
    "You are very welcome in my personal portfolio website. Please feel free to take a look at the apps and samples i worked on and also browse my git-hub profile. In order to contact me you are welcomed to fill in the contact form right below or just hit me up on one of my social media accounts. You are able to text/call me through Telegram too.",

  experiences: [
    {
      title: "Software Engineer at MaibornWolff",
      description:
        "• IoT Projects, Cloud Architecture Deployment, DevOps, Pipelines, Azure, AWS.",
      date: "08/2021 - Present",
    },
    {
      title: "Master Thesis Internship at MaibornWolff",
      description:
        "• Evaluation of Edge Computing Platforms and Validation with a Proof of Concept.",
      date: "02/2021 - 07/2021",
    },
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
      date: "2013",
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
      description:
        "I have been working on IoT applications and architecture for 2 years.",
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
    //#region React JS Projects
    //#region Project Portfolio App
    {
      tag: "React JS",
      image: "https://drive.google.com/uc?id=1TKKzuJ3T4fJJn9_JcxOO1ZDgL2jaWQJm",
      title: "Protfolio",
      caption: "My Personal Portfolio",
      description:
        "This is my personal portfolio where my CV and all my projcts are shared",
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

    //#region Project Netflix Clone App 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1Np9eLWkXis0uXDv0gTJjvMp9objJyCv2",
      title: "Netflix Clone App 1",
      caption: "Netflix Clone Version 1",
      description:
        "This project is a Netflix clone that uses the IMDb API to play movies trailers",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-netflix-app-1",
          icon: <GitHub />,
        },
        {
          link: "https://react-netflix-app-1.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Netflix Clone App 2
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1L6ZmBwm63hsqNUryV9BjdlVfy7Hb2uzD",
      title: "Netflix Clone App 2",
      caption: "Netflix Clone Version 2",
      description:
        "This project is a Netflix clone that uses the IMDb API to play movies trailers and FireBase for user login",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-netflix-app-2",
          icon: <GitHub />,
        },
        {
          link: "https://react-netflix-app-2.netlify.app/",
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
      caption: "Online Shopping",
      description:
        "A clone for Amazon online shopping using FireBase for project hosting and user login",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-amazon-app",
          icon: <GitHub />,
        },
        { link: "https://clone-irad-682e5.web.app/", icon: <Language /> },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1DQe3cFLZr2bLAwXhLkBbsaEA7ZOP-XLp",
      title: "Covid 19 Tracker App 1",
      caption: "Covid 19 Tracker Version 1",
      description:
        "Project that uses a public API to keep a track on the corona state worldwide",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-covid19-tracker-app-1",
          icon: <GitHub />,
        },
        {
          link: "https://covid19-tracker-app-irad.web.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 2
    {
      tag: "React JS",
      image: "https://drive.google.com/uc?id=1EudZx9cGyBC4cMC1Bs7xPGvXNXzhwhU1",
      title: "Covid 19 Tracker App 2",
      caption: "Covid 19 Tracker Version 2",
      description:
        "Project that uses a public API to keep a track on the corona state worldwide",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-covid19-tracker-app-2",
          icon: <GitHub />,
        },
        {
          link: "https://react-covid19-tracker-app-2.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Alan AI News App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=19537gNav5z6AeJ-AxqdlnW1YxKtKh7O5",
      title: "Alan AI News App",
      caption: "AI News App",
      description:
        "New application that uses ALAN AI model to answer to questions",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-voice-controlled-news-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-voice-controlled-news-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project HOT or COLD Game App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1w7Hc-w2A_yDSv6c9ClH0mTRqzqPJPvB3",
      title: "HOT or COLD Game",
      caption: "Prediction Game",
      description:
        "Random number prediciton game where player have to guess to number the game predicted",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-hot-cold-game-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-hot-cold-game-app.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Advice Generator
    {
      tag: "React JS",
      image: "https://drive.google.com/uc?id=1oUxkY_z_qhGEvy1ZF_ROfcCflt-eMts9",
      title: "Advice Generator",
      caption: "Advice Generator",
      description: "Advice generator app using an API",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-advice-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-advice-app-irad.netlify.app",
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
      caption: "Landmark Detecotor",
      description:
        "ML/AI base ReactJS app that detects face landmarks based on a pre-trained model",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-tfjs-face-landmark-detection-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-tfjs-face-lm-detect-app.web.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=122nOa8ebj9d_Iy2tjaxF3Q_Dk-iRFyU5",
      title: "Youtube Clone App",
      caption: "Youtube Like App",
      description:
        "App that uses the Youtube API to search for videos and play them on screen",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-youtube-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-youtube-app-irad.netlify.app",
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
      caption: "Video Thumbnail",
      description:
        "Youtube inspired app that applies thumbnails to videos like on Youtube",
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
      caption: "Instagram Inspired",
      description:
        "Instagram like app for pictures sharing and comments with user login",
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
      caption: "Messenger Inspired",
      description: "Messenger like app for real time chatting with user login",
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
      caption: "To Do Notes",
      description: "A minimalist To-Do app that saves the tasks",
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
      caption: "Tinder Inspired",
      description:
        "Tinder like app to accept/reject people with user login and real time chat implemented",
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

    //#region Project Tinder Clone App
    {
      tag: "Gatsby JS",
      image:
        "https://drive.google.com/uc?export=download&id=1LMWynINpR0TMNqXL3DW5i6KlY-Vkz1Is",
      title: "Code Blog App",
      caption: "Online Blog",
      description: "Online Blog app about coding based on Gatsby and GraphQL",
      links: [
        {
          link: "https://github.com/iradbouzidi/gatsby-blog-app",
          icon: <GitHub />,
        },
        {
          link: "https://gatsby-blog-app-irad.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MEAN Stack Projects
    //#region Project Smart Trash Monitoring App
    {
      tag: "MEAN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1AGEkWq7ybkdkF92Tppq-cnCARzU3Kziy",
      title: "Smart Trash Monitoring",
      caption: "Public Trash Monitoring",
      description:
        "Trash Monitoring IoT System based on sensors and data collection",
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
      caption: "Task Organizer",
      description: "Task Manager to organize to do task with user login",
      links: [
        {
          link: "https://github.com/iradbouzidi/smart-trash-monitoring",
          icon: <GitHub />,
        },
        {
          link: "https://mean-task-manager-app-irad.netlify.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MERN Stack Projects
    //#region Project Memories App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1hHjMIkF9j56ki0gCso4uHQdfBfZbo-g5",
      title: "Memories",
      caption: "Share Memories",
      description:
        "Memories sharing app with user login, memory detail, suggested memories and more",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-memories-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-memories-app-irad.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Chat App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1uqxA0-j00G9Q8rtxnztiZOMDkXHTuho3",
      title: "Chat App",
      caption: "Real Time Chat",
      description:
        "Real Time chat with rooms concept for more that 2 participants based on user login",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-chat-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-chat-app-irad.netlify.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project PDF Generator App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1GATK9gGed1U1zXO187ylUZ6NjXjy8ZhD",
      title: "PDF Generator",
      caption: "Generate PDF from input",
      description: "PDF Generator example based on user given input in a from",
      links: [
        {
          link: "https://github.com/iradbouzidi/pdf-generator-app",
          icon: <GitHub />,
        },
        {
          link: "https://pdf-generator-app-irad.netlify.app/",
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
      caption: "Price Tracker Automation",
      description:
        "Selenium Automation Script for price tracking, webscrapping amazon articles",
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
      caption: "Real Time Street Tracking",
      description:
        "Real Time Cars and Pedestrians Trackin AI model using video input or live camera",
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
      caption: "Real Time Face Detector",
      description: "Face Detector AI model using video input or live camera",
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
      caption: "Real Time Smile Detector",
      description: "Smile Detector AI model using video input or live camera",
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
      caption: "Classic Snake Game",
      description: "The legacy of the classic Snake Game we all played as kids",
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
