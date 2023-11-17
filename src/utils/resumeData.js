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
    //#region Next JS Projects
    //#region Messenger Clone App
    {
      tag: "Next JS",
      image:
        "https://drive.google.com/uc?export=download&id=1M_LbkRbO1ttzSqL2f2Nz_9i7qBhW8A3P",
      title: "Messenger Clone App",
      caption: "Real-Time Messenger Clone",
      description:
        "Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher (2023)",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-messenger-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-messenger-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Messenger Clone App
    {
      tag: "Next JS",
      image:
        "https://drive.google.com/uc?export=download&id=1OmYnpVrUaF0nXzKGQWeLJvLKZJ3bo_ZD",
      title: "CMS Blog App",
      caption: "Modern Next JS CMS Blog App",
      description:
        "Feature-rich Next JS HeadlessCMS Blog App with GraphQL, responsive design, markdown articles, categories, author info and comments.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-cms-blog-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-cms-blog-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#endregion

    //#region MERN Stack Projects
    //#region Real-Time Chat App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1yoOQMlU9Xag9mpD0rQVEaUlf3AyucR8c",
      title: "Real-Time Chat App",
      caption: "Full Stack Realtime Chat Messaging App",
      description:
        "Full Stack Realtime Chat Messaging App with Authentication & SMS Notifications.",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-realtime-chat-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-realtime-chat-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Memories App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1iA2yiw9dnSLOek257zEGcVTl6XOqpjDa",
      title: "Memories App",
      caption: "Social Media App",
      description:
        "Full Stack MERN Social Media App with Auth, Pagination, Comments.",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-memories-app",
          icon: <GitHub />,
        },
        {
          link: "https://irad-mern-memories-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Video Chat App
    {
      tag: "MERN Stack",
      image:
        "https://drive.google.com/uc?export=download&id=1KZwfpa4YSnOav-tzmgQevdoyzT0f5hTb",
      title: "Video Chat App",
      caption: "Video Chat App",
      description: "",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-video-chat-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-video-chat-app-client.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region React JS Projects
    //#region Project Cryptocurrency App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1HJVpwGLmoincWzKStFBB5Csc2XpcUEGp",
      title: "Cryptocurrency App",
      caption: "React Cryptocurrency App with Master Redux Toolkit",
      description:
        "Advanced React Cryptocurrency App with best practices, State Management using Redux Toolkit, UI Creation using Ant Design, creating charts using Chart.js, and fetching data from multiple sources using RapidAPI ",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-cryptocurrency-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-cryptocurrency-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project E-commerce Shop App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1f9FdfyilHvscCHi9gw4DdWD3Vq0amSvW",
      title: "E-commerce Shop App",
      caption: "Build & Deploy an Amazing App | React.js, Commerce.js, Stripe",
      description:
        "Learn how to build & deploy a complete eCommerce website. In this video, we're going to build a fully functional eCommerce application using commerce.js.",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-ecommerce-shop-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-ecommerce-shop-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Netflix Clone App 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1WIc2CpCPgd7S5FxyAoBNHyFMMhMy0Ydh",
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
          link: "phttps://react-netflix-app-1.netlify.ap/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 1
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1FW9n1iReOb2zxXECrwgKUGumawpwuQhF",
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
          link: "https://react-covid19-tracker-app-1.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Alan AI News App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1k1e5I0Na1_34-6FF4CgDeBfB_oe_mXAQ",
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
          link: "https://react-voice-controlled-news-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project HOT or COLD Game App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1dKMwKT0gCc7AtArGE6N_PLZqRl8I4gU0",
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
          link: "https://react-hot-cold-game-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Advice Generator
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1JxOI4Rm7GBN_Fk9qmT97RcpqjX9PnAXm",
      title: "Advice Generator",
      caption: "Advice Generator",
      description: "Advice generator app using an API",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-advice-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-advice-app-irad.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Face Landmark Detection App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=12J5p1rFiFJMNBhB_fMnNMH5rE2HBLNGO",
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
          link: "https://react-tfjs-face-landmark-detection-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Clone App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1JyQ8eYWJwEgj8dXnt2dkZ-vYhsrzikqI",
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
          link: "https://react-youtube-app-1.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Thumbnail App
    {
      tag: "React JS",
      image:
        "https://drive.google.com/uc?export=download&id=1vuJQOHIdcEilspLOoywdzYcpIHUJ_BFn",
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
          link: "https://react-youtube-thumbnail-app.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#endregion
  ],
};
