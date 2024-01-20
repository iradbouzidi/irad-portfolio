import React from "react";
import {
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
  title: "Full-Stack Software Engineer",
  birthday: "19th June 1994",
  email: "b.irad1994@gmail.com",
  address: "Tunis, Tunisia",
  phone: "+216 53 774 305",

  socials: {
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
  },

  about_me:
    "Hello There 🙂 !" +
    "\n\n" +
    "I am Irad Bouzidi a Full-Stack Software Engineer." +
    "\n\n" +
    "As a dynamic and dedicated Full Stack Software Engineer with three years of hands-on experience in the IT world, I thrive in crafting innovative solutions that integrate cutting-edge technologies. Proficient in Java 17, TypeScript, and adept with cloud platforms like Azure and AWS, I specialize in developing scalable applications. My expertise in Docker, micro-frontends, and CI/CD pipelines, including GitHub Actions and GitLab CI/CD, underscores my commitment to delivering high-quality, efficient, and robust software solutions. I excel in collaborative environments, leveraging my skills to drive impactful projects that seamlessly bridge the gap between development and deployment." +
    "\n\n" +
    "Passionate about innovation and driven by a continuous learning mindset, I am poised to contribute my expertise to dynamic teams in driving technological advancements and achieving project success." +
    "\n\n" +
    "You are very welcome in my personal portfolio website. Please feel free to take a look at the apps and samples i worked on and also browse my git-hub profile." +
    "\n\n" +
    "Don't hesitate to download my resume and send an email!",

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
      title: "OPERATING SYSTEMS",
      description: ["Linux", "Unix", "Embedded Linux"],
    },
  ],

  projects: [
    //#region Next JS Projects
    //#region LMS Platform App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR6vMCoyMeeHrwRtfaqDBYVci7T_AMwOM084aWsG4zYdjujfevur8JjgUGXZtn5jZCtcbPUdeG1lOmyThyhjyFOIcH8hQ=s1600",
      title: "LMS Platform App",
      caption: "Next-JS Learning Management System Platform App",
      description:
        "Next-JS Learning Management System Platform App With Next 13, Stripe, Mux, Prisma, Tailwind and MySQL",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-lms-platform-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-lms-platform-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Discord Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSN2Tu6PQf7EDhWAUswp7ZOR5M2zrU40prYY2z1suc2EGyDxiE8L5kQT1XSZ_6fFU2AhPtqQudKE4aO6ecWGkVQhfE-xw=s1600",
      title: "Discord Clone App",
      caption: "Next-JS Discord Clone App",
      description:
        "Next-JS Discord Clone App With Next 13, Socket.io, Prisma, Tailwind, MySQL.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-discord-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-discord-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region SaaS AI Companion App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRxR2RuCAtwmnb1A0kzDyw49O9ztAcMHU4M93UI2Sa2HlKRKx_tdScgr-sDmBnHpxfe5vDXFN5auFDyKwHXWyeaGXtFHQ=s1600",
      title: "SaaS AI Companion App",
      caption: "Next-JS SaaS AI Companion App",
      description:
        "Next-JS SaaS AI Companion App With Next 13, React, Stripe, Prisma, MySQL, Tailwind.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-saas-ai-companion-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-saas-ai-companion-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region SaaS AI Platform App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSTVtWWwGP4RRDE6EXgW5UUQNCWm9UE9iNvhetBQ4_39Qr70_tY_ZSDRtvAnQADuNL-L4Jwq9c_M_kotQi6JQaKofn3lQ=s1600",
      title: "SaaS AI Platform App",
      caption: "Next-JS SaaS AI Platform App",
      description:
        "Next-JS SaaS AI Platform App with Next.js 13, React, Tailwind, Prisma, Stripe.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-saas-ai-platform-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-saas-ai-platform-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region E-Commerce Store App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSUecKUebwKZWGbvRW5tbUW3PJ_0o8psuXOJz1s7K4EudgBxIRCJpDy-XFKVBHfvg88EKHDRsJNyCyrYwuY8NoMc96R6g=s1600",
      title: "E-Commerce Store App",
      caption: "Next-JS E-Commerce Store App",
      description:
        "Next-JS E-Commerce Store App with Next.js 13 App Router, React, Tailwind, Prisma, MySQL.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ecommerce-app/tree/main/next-ecommerce-store-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ecommerce-store-app-client.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region E-Commerce Admin App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRpJEvIV_BnSsuQcgg1yysY6Tq8wuXum6eLKNHRec0EmGTfhQKHoORj8KMWf_37WR29JYZvsn58PI6pcnulNuVSxigutA=s1600",
      title: "E-Commerce Admin App",
      caption: "Next-JS E-Commerce Admin App",
      description:
        "Next-JS E-Commerce Admin App with Next.js 13 App Router, React, Tailwind, Prisma, MySQL.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ecommerce-app/tree/main/next-ecommerce-admin-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ecommerce-admin-app-client.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Spotify Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR3oMMEihpw6BrRPgaI3a7VPnBhFOEqw6QG2aEiRAOG497553X_WPhb_QM8ERwq0r87_y0NBpuFOQLjEp17D4vOQYDznQ=s1600",
      title: "Spotify Clone App",
      caption: "Next-JS Spotify Clone App",
      description:
        "Spotify Clone App: Next 13.4, React, Stripe, Supabase, PostgreSQL, Tailwind.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-spotify-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-spotify-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Messenger Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQDEYPO5ym6GjqMqp2zhd-rMKu1Z0_rwmfbCu8_7tfXgvcynJAjCLspb8eUptXtPYvqIusbRBX8s9KhKGB9amSEGRfK=s1600",
      title: "Messenger Clone App",
      caption: "Next-JS Messenger Clone App",
      description:
        "Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher.",
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

    //#region Airbnb Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSw0tJXRzWhsHKpi_P2n9qY_2O5rxeJNMM-tOBHE68EscoMXzOJ7MWD4esgriDw1KgmMSuwIMbAkPrcKhmmhwFkDDHO=s1600",
      title: "Airbnb Clone App",
      caption: "Next-JS Airbnb Clone App",
      description:
        "A Next-JS Airbnb clone application that leverages server-side rendering for seamless performance, integrating dynamic map functionality and personalized user experiences",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-airbnb-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-airbnb-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Twitter Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTEzVYSJbEOS1yJ5HDXy9Lmew2SHvOdTUWG6wOga_8qdKk5CS2nOc2GDSetPmkpkSzJRZBuh3r1NpmikkkUcbpwbjaB=s1600",
      title: "Twitter Clone App",
      caption: "Next-JS Twitter Clone App",
      description:
        "A Next-JS Twitter clone with Tailwind CSS, Prisma and MongoDB. Also deployed to Vercel! ",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-twitter-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-twitter-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Netflix Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRksFMKgf9MvHbDV1jSKwcSkZBB6H58VNOHcbcF5pA1g44EE0JeqI17yFWhsO98878JaBnr3f58CLLgk2zDloRQ2100aQ=s1600",
      title: "Netflix Clone App",
      caption: "Next-JS Netflix Clone App",
      description:
        "A Next-JS powerful and scalable Netflix Clone App using Tailwind CSS, Prisma, MongoDB and NextAuth",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-tiktok-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-netflix-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region TikTok Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRh2xNrwt8Jn_83kM_xkpEBGZdKHi93IXAGi2WrIU01oH0RQ5HQ67kqOVmOe69TzJxhR-K7kQQktBw-xyhho0zltNKPJA=s1600",
      title: "TikTok Clone App",
      caption: "Next-JS TikTok Clone App",
      description:
        "TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design and much more.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-tiktok-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-tiktok-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Social Media App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTpoVWssg_O5awWp8lpGC48OCew3vsqMAvUj4W_RLVuA1fm4jFVhko13UZyXHDJKjZD-GT4p-YT5M7BW3Xxbds-6tcqrQ=s1600",
      title: "Social Media App",
      caption: "Next-JS Social Media App",
      description:
        "A modern Next-JS Social Media App with a stunning UI with a native mobile feel, a special tech stack, an infinite scroll feature, amazing performance using React JS, Appwrite, TypeScript and more.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-social-media-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-social-media-app-client.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Threads Clone App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ7dhDhnmDi8zDHDKrDfaTc32DPnfq1OLCUgI4ZI3MbxYCWqU6FMTLxXHJn0iMShwWVWzckLpeoCVW2GpxNRq3UW55mrQ=s1600",
      title: "Threads Clone App",
      caption: "Next-JS Threads Clone App",
      description:
        "A Next-JS 14 Threads Clone App with Clerk, Uploadthing and MongoDB.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-threads-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-threads-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Events App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ1uDT07NJC1L5LYm0CnKQsfMVyI1bWUQU_tBHfhPqaQUGRzFBgswN5PsOigrcEJ93noDvWhREhcC4JfPArTzNWiGbiSA=s1600",
      title: "Events App ",
      caption: "Next-JS Events App with Stripe, Typescript, Tailwind",
      description:
        "An event organization web app with authentication, event management, search, filtering, categories, checkout and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk and Stripe.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-event-platform-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-event-platform-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region E-commerce Admin Dashboard App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRIlqxSdhb73cJcYpp62BPG9qKPx5sAasRGiwH8YWq6P_c3HBI86QNna7tI-wAmVQFC9SK5W7haXdGgMHBrBvJ9svAPjw=s1600",
      title: "E-commerce Admin Dashboard App",
      caption: "Next-JS E-Commerce Admin Dashboard App",
      description:
        "A Next-JS E-commerce webshop with an admin dashboard and CMS using Next 14, Stripe, TypeScript and Payload CMS.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ecommerce-admin-dashboard-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ecommerce-admin-dashboard-app.payloadcms.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project AI Prompt Sharing App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTCh0C-A8D8ucpL7G2ZJKIrwHBvOJiZ9xrr_UYVk82ilkIZj54dGVXQy7Z_XiF5XiBncjIrZ44TianZiTkGMBZVzTYUJg=s1600",
      title: "AI Prompt Sharing App",
      caption: "A Next-JS AI Prompt Sharing App",
      description:
        "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ai-prompt-sharing-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ai-prompt-sharing-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region E-commerce Shop App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRZFTMNc8ZxLqjUe4EtiemRX4Q00rjt5k32oQP1knEjoq2ipRyxS7PPVRACx6C5qKJDEtexyKd9q71265OH4RF40s0VFA=s1600",
      title: "E-commerce Shop App",
      caption: "Next-JS ECommerce Application with Stripe",
      description:
        "E-commerce App that includes modern design and animations, the ability to add and edit products on the go using a Sanity, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe so that you can cover real payments.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ecommerce-shop-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ecommerce-shop-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region E-commerce Price Tracker App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRS8XR4lKLIqpYn93JqE5tlMx0pdl5uJYV6gNCQShxnOIAlhIoMOo-OCLqXbqLJJMiPB4n1uZ7nmo7oOZKiO0vLVG9zgw=s1600",
      title: "E-commerce Price Tracker App",
      caption: "Next-JS E-Commerce Price Tracker",
      description:
        "E-Commerce price tracker that includes data scraping, cron jobs, sending emails, deployment and more.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-ecommerce-price-tracker-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-ecommerce-price-tracker-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Car Showcase App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQmw2Xx3H2p9q1lV6FmJfaHJihpGiLxYyE7S8z5z_df38Xrjg9AltQ2C2eo4vssZMBDADyZc4L4YjWaKltGIFiNNw-4UA=s1600",
      title: "Car Showcase App",
      caption:
        "CarHub NextJS Application with Car RapidAPI and imagin-studio API for car images.",
      description:
        "Find, book, rent a car—quick and super easy! Streamline your car rental experience with our effortless booking process.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-car-showcase-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-car-showcase-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Real Estate App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRdd4k3ec20ehGo1zkh7Y6GBOGtEwMOpPVMOh8JtzJBg3HwTwjPlM2hqn8Ucorz4F_29hRv96VPatPZKfbGyDu1OriuTw=s1600",
      title: "Real Estate App",
      caption: "Modern Real Estate App",
      description:
        "An amazing Real Estate Application. With rental homes and for-sale properties, advanced property filtering, property details page with an image carousel and much more.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-real-estate-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-real-estate-app-client.vercel.app/",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region CMS Blog App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRVgcGoaz19LaRdyQspSI74hhup_dUOmV7X6Wt_TEJdOQ_ZgfRAyHrVE1nw0g37YmgmzCVYmestd8KvR449HUMEOJjODg=s1600",
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

    //#region Project Metaverse Landing App
    {
      tag: "Next JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYT0Ne4CKSMWVswmz10kERUkX1aPkrHub7jvcgfX2lk9riwnHhP4IBPF9ko3TLWQibfNJqYXz-3Y3enNei71juNzWSs1=s1600",
      title: "Metaverse Landing App",
      caption: "Modern Website With Framer Motion & Tailwind CSS",
      description:
        "A fully functioning website using Next13, Framer Motion and Tailwind CSS.",
      links: [
        {
          link: "https://github.com/iradbouzidi/next-metaverse-concept-landing-app",
          icon: <GitHub />,
        },
        {
          link: "https://next-metaverse-concept-landing-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion
    //#endregion

    //#region MERN Stack Projects
    //#region Memories App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRIR9GFnrXolS_UhOXTt9eMQLDYKeYxWV76TYUpD_JKzxO-RyMViVrtTDN2m5grF0x-hnrnbWAf_uEEIN8VtIYhVSNE=s1600",
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

    //#region Project Dashboard App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ-4X69CC3UUAg_J_Trdj4I58NAkeWaQUeb8LAfR026nP_YzDGSHEKZHNKvxm1mM73tI_VMvIsZejlpOg3h6eVb2gG67g=s1600",
      title: "Dashboard App",
      caption:
        "Full Stack MERN Application With CRUD, Auth, and Charts Using Refine",
      description:
        "A fully functional full-stack MERN dashboard application with complete CRUD functionalities, authentication, pagination, sorting, filtering and more!",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-dashboard-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-dashboard-app-client.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project AI 3D App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSUyjmFcDgk2sxiRPaGzoOqCbTyb32plblKmfXeztdgh_dkWrGbZO2FkPCdVq2mSkylCCBYP-mG0XsJ9zh_2T2GQRcqYg=s1600",
      title: "AI-Powered 3D App",
      caption: "AI-Powered T-Shirt 3D App",
      description:
        "ThreeJS 3D product website infused with the power of artificial intelligence!",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-ai-3d-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-ai-3d-app-client.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region MERN AI Image Generation App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYS6fh3s3HCp1sdFztsRWIYXeo7Ytog82XweCx8CN3ZysHfdtyW9QSv1ZtT22C3fjuvd1xuAHzTmqqSJfpW_bvS5HW3FkA=s1600",
      title: "AI Image Generation App",
      caption: "Full Stack MERN AI Image Generation App",
      description:
        "MidJourney and DALL-E are taking over social media. Dive into the world of artificial intelligence with this MERN Stack version of these tools that can generate everything from memes and art to beautiful UI/UX designs!",
      links: [
        {
          link: "https://github.com/iradbouzidi/mern-ai-image-generator-app",
          icon: <GitHub />,
        },
        {
          link: "https://mern-ai-image-generator-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Real-Time Chat App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQbaXIoO7MGQWd8OlYA_LnzB7ONqC1uKnmIJNGLlfaotrOI8SBcmbMcm_fFjexhAv_x7DO3bn39WqYLX27ugKwzLtfSuA=s1600",
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

    //#region Project Video Chat App
    {
      tag: "MERN Stack",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQpVb42H01gtrzDIjEZKjDI0JaA8q9aU_pv2-kLgDP-l_Tdl9t0S7euQgNp94NNjVPrKGW_pRfWMrRm28IGrTsm6B4ZKQ=s1600",
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
    //#region Project Dashboard Admin App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR-fWIF5iWA77sDpAxD6fPgjPSQF_whsyYxRj62_n7lbFqZUjkTWGCePQXHFaqh1JOhTm12d1PylQd9_y3RBUEzTJI1=s1600",
      title: "Dashboard Admin App",
      caption: "A React Admin Dashboard App",
      description:
        "Admin Dashboard With Theming, Tables, Charts, Calendar, Kanban and more. This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-dashboard-admin-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-dashboard-admin-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Chat App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR8En6Q-nbclcUI4PqcdxFzeKuwsAL4O6OffRczGWOb1P3X-Uwp5CW1OYiikvOgXcdkhlEsT_1BlE7NERpDPzfqiniudw=s1600",
      title: "Chat App",
      caption: "A Teams like Chat App",
      description:
        "With online statuses, great design and functionality, icons telling you who read the message, image support, sound notifications, the ability to create multiple rooms and much more; this chat app is like no other!",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-chat-app",
          icon: <GitHub />,
        },
        {
          link: "https://reactjs-chat-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Clone App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSH5HxbsYMwivdm_Mm0pgiSEXDFBxUN1QWdGQ8epmZxxgUTRifTGV5gx1sG610vZ_vpr3bJLIAYR1NNpyU_vZ6tlVw2dw=s1600",
      title: "YouTube Clone Application",
      caption: "A modern YouTube Clone Application ",
      description:
        "A responsive React JS application consisting of stunning video sections, custom categories, channel pages, and, most importantly, you can play videos straight from your YouTube Clone App!",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-youtube-clone-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-youtube-clone-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Youtube Clone App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQC5VsI87302wK2mypNAjic0JcwUHmHvPS5YwbSC_EQkzlfpssf-Y-WyoMxwkedSbxEWXEHb4jnOCs9k8GzAIiyP8RP=s1600",
      title: "AI Article Summarizer",
      caption: "AI Article Summarizer usin Rapid-API",
      description:
        "An Article Summarizer Application using OpenAI's GPT model.",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-ai-summarizer-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-ai-summarizer-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Fitness App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ3SJMR5v6ptsgp8sQxXOEiVrJmwX4HEjbpdOFKApRkO_qUx6mM72dtbc9mKe5PgfEEvhAKiWzUGAghEhYDwvjwYgofyg=s1600",
      title: "Gym Fitness App",
      caption: "Fitness Exercises App With APIs",
      description: "Modern Fitness Exercises App using two separate APIs!",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-fitness-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-gym-fitness-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Cryptocurrency App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTQUNt29H0UbgNtupghT1LFIJ7BqcH6oJEzD5YPBGsayD9m3yfNC90PzDoVYZxDzVFG4y_37rypPzO_ecwevrjgL9xPVA=s1600",
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
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTDSq2pyFBCe9hQq8vfAlbVCBUMUdYWkySAceRjMN4OtorPmchDnnjw7GHlCYMOKY3Zp7fWIpVipUqtmemmQQITTY0AMA=s1600",
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

    //#region Project Business Landing App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSt4daaaMEqWXSK9l6ieq-qx6FLWmy8hrlEoDZ7-cntYvcezT9kOBpf_fYWNUtLg-_KECO_351OoeotX4c3MVVfwp4P-A=s1600",
      title: "Business Landing App",
      caption: "Fully Responsive Website with Modern UI/UX",
      description:
        "Responsive React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials and more!",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-business-landing-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-business-landing-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Restaurant App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQSYa3UMceeP5kFl8s2EG8mKhk0Jn3K7ZF5IMsqXSnPqxr7gaxNZXXWfxB8FBDulZK9cuHVVMR-OMm44zu-YSh7P_ythw=s1600",
      title: "Restaurant App",
      caption: "Fully Responsive Restaurant App",
      description:
        "Fully Responsive Restaurant Website with Modern UI and UX in ReactJS",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-restaurant-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-js-restaurant-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project GPT-3 App
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRztt4qmk3Rhkl5gaN7JZJw1K_b7DGkvFPTKeQouKldiGu1a7xdePY3sIEsa1C8xb35avNNJb4de_cy-yDXxFKROIqK=s1600",
      title: "GPT-3 App",
      caption: "Fully Responsive GPT-3 App",
      description:
        "Fully Responsive GPT-3 App Website with Modern UI and UX in ReactJS.",
      links: [
        {
          link: "https://github.com/iradbouzidi/react-gpt3-app",
          icon: <GitHub />,
        },
        {
          link: "https://react-gpt3-app.vercel.app",
          icon: <Language />,
        },
      ],
    },
    //#endregion

    //#region Project Covid 19 Tracker App 1
    {
      tag: "React JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTV-c8OGKbGY9l58OLygWZdDSna-rqESWES2Dz9ioE7FpiluPYA2XK7xvDk-NV5nPYQdf5BUD-YBxM9f2WVO3JkOTLZ=s1600",
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
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSeYbYtl-K1Cwlq55pEflYvHORTZ5MpD4-vuMHG3L7X7lEjAx2qZykik6PKgtHHgGf2JhOi5YScPw0ZbP3Rfd1L4BfpJw=s1600",
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
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTYGI-rGnZdFX-ifXomQe_LwNguS-pqwVYnVsNXxSvpR-wfzWWlyXk9hAI7jER5aXycybuRM6DI-VjTIhDH8FRLt1APbw=s1600",
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
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYS-ZdPmoaOJOTqf_8o1zxAde9VSpoaeBb6mAHVTe34-DMdI9k32eF__Ip87RcwnaOYuYWWvJ9RoHeWhslhForX2IGLm6g=s1600",
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
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQJu2JIlIpRLD6HOLFe7il_ahIY_55uycoVNNJLKGjpu2ltPW7hIbB3DXG4clQzARYsgz6YqR6DQ_e27lJldNp-wzqzNw=s1600",
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
    //#endregion

    //#region Node JS Projects
    {
      tag: "Node JS",
      image:
        "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQBKl2rzTvJszopZEGTvTMN3ju3_jLSCzTTC7CLmuLigtM-l_nhbjkJ1d1E2MEIKKOJhXm5n3oEfNVSm0IibCh_7CCeWA=s1600",
      title: "Amazon Product Scraper API",
      caption: "Amazon Product Scraper API",
      description: "Amazon Product Scraper API",
      links: [
        {
          link: "https://github.com/iradbouzidi/node-amazon-scraper-api",
          icon: <GitHub />,
        },
        {
          link: "https://rapidapi.com/iradbouzidi/api/node-amazon-scraper-api",
          icon: <Language />,
        },
      ],
    },
    //#endregion
  ],
};
