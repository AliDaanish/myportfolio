import {
    aboutLogo01,
    aboutLogo02,
    aboutLogo03,
    aboutLogo04,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    github,
    weburl,
    figmaLogo,
    figma,
    threejs,
    lazis,
    dicoding,
    harisenin,
    codepolitan,
    lazisD,
    myweb,
    goodreadsM,
    tweetX,
    linkedIn,
    chocobo,
    chocobo2

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const socialContact = [
    {
      id: "linkedIn",
      icon: linkedIn,
      url: "https://www.linkedin.com/in/ali-daanish-17b315245/"
    },
    {
      id: "tweetX",
      icon: tweetX,
      url: "https://twitter.com/AliDaanish777"
    }
  ]

  const services = [
    {
      title: "UI Designer",
      icon: aboutLogo01,
    },
    {
      title: "UX Designer",
      icon: aboutLogo02,
    },
    {
      title: "React Native Developer",
      icon: aboutLogo03,
    },
    {
      title: "Front End Developer",
      icon: aboutLogo04,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "CMS Web Developer",
      company_name: "Lazismu Jawa Barat",
      icon: lazis,
      iconBg: "#E6DEDD",
      date: "Mei 2021 - Augustus 2022",
      points: [
        "Developing and maintaining Media Berbagi web applications.",
        "Developing lazismujawabarat.org for Crowdfunding CMS based application.",
        "Redesign UI website and mobile.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Fundamental Front-End Web Development Bootcamp",
      company_name: "Dicoding Academy",
      icon: dicoding,
      iconBg: "#E6DEDD",
      date: "April 2023 - July 2023",
      points: [
        "Learning Basic to advance HTML, using proper semantic while organizing and lay outing web page.",
        "Implementing proper CSS property and flexbox to create usable and responsive web page.",
        "Developing Final Project web page with HTML and CSS, and earn a good score.",
      ],
    },
    {
      title: "Product Management and UI/UX Design Bootcamp",
      company_name: "Harisenin.com",
      icon: harisenin,
      iconBg: "#383E56",
      date: "September 2023 - March 2024",
      points: [
        "Basic of Product Management and Deliver a Minimum Viable Product(MVP)",
        "arrange Product Development Process-PRD, Go-To Market Strategy(GTM)",
        "Product Development Process, User Research, User Persona, User Journey and Wireframing",
        "Create Design System, Mockup and Prototyping product.",
        "Redesign Goodreads Mobile App for Final Project and earn the Highest GPA Score"
      ],
    },
    {
      title: "Full Stack Developer Bootcamp",
      company_name: "Codepolitan",
      icon: codepolitan,
      iconBg: "#E6DEDD",
      date: "28 September 2022 - Present",
      points: [
        "Learning Front End Development web application by using ES6 Javascript, DOM, Asynchronous and Object Oriented Programming(OOP) concept",
        "Developing Responsive web page using React JS and Tailwind CSS",
        "Build 3D model to integrate with ReactJS using Three.JS library",
      ],
    },
  ];
  
  
  const projects = [
    {
      iconLink: weburl,
      name: "Lazismu Jawa Barat",
      description:
        "Web-based platform that allows users to search philantropy program and donate. I'm adding crowdfunding system feature because it wasn't available in their website ",
      tags: [
        {
          name: "CMS",
          color: "blue-text-gradient",
        },
      ],
      image: lazisD,
      source_code_link: "https://lazismujawabarat.org/",
    },
    {
      iconLink: github,
      name: "My Portfolio Website",
      description:
        "This is my personal portfolio including repository link. I'm build my portfolio with ReactJS, ThreeJS library and TailwindCSS",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: myweb,
      source_code_link: "https://github.com/AliDaanish/myportfolio",
    },
    {
      iconLink: figmaLogo,
      name: "Redesign Goodreads",
      description:
        "Redesign Goodreads UI Homepage to be more friendly, simple to navigate and adding new feature like Live Review with author, Filter or Sorting, Personalize book.",
      tags: [
        {
          name: "UI",
          color: "blue-text-gradient",
        },
        {
          name: "UX",
          color: "green-text-gradient",
        },
        {
          name: "Prototype",
          color: "pink-text-gradient",
        },
      ],
      image: goodreadsM,
      source_code_link: "https://www.figma.com/file/HxHThlVEGJOPoSgFZLowPd/Redesign-Goodreads-Prototype?type=design&node-id=0%3A1&mode=design&t=tTHMVB1CZTMdnRof-1",
    },
  ];

  const popDatas = [
    {
      id: "1",
      icon: chocobo,
      first: "Thank you.",
      second: "I will get back to you as soon as possible."
    },
    {
      id: "2",
      icon: chocobo2,
      first: "I am Sorry.",
      second: "Somethings went wrong"
    }
  ]
  
  export { services, technologies, experiences, projects, socialContact, popDatas };