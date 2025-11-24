// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cssLogo from './assets/tech_logo/css.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import postmanLogo from './assets/tech_logo/postman.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import webverseLogo from './assets/company_logo/webverse_logo.png';

// Education Section Logo's
import bcaLogo from './assets/education_logo/bcalogo.png';
import rwLogo from './assets/education_logo/r&w.png';

// Project Section Logo's
import health from './assets/work_logo/health.png';
import nobel from './assets/work_logo/nobel.png';
import onyx from "./assets/work_logo/onyx.png";



export const SkillsInfo = [
  {
    // title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     { name: 'Springboot', logo: springbootLogo },
  //     { name: 'Node JS', logo: nodejsLogo },
  //     { name: 'Express JS', logo: expressjsLogo },
  //     { name: 'MySQL', logo: mysqlLogo },
  //     { name: 'MongoDB', logo: mongodbLogo },
  //     { name: 'Firebase', logo: firebaseLogo },
  //     { name: 'PostgreSQL', logo: postgreLogo },
  //   ],
  // },
  // {
  //   title: 'Languages',
  //   skills: [
  //     { name: 'C', logo: cLogo },
  //     { name: 'C++', logo: cppLogo },
  //     { name: 'Java', logo: javaLogo },
  //     { name: 'Python', logo: pythonLogo },
  //     { name: 'C-Sharp', logo: csharpLogo },
  //     { name: 'JavaScript', logo: javascriptLogo },
  //     { name: 'TypeScript', logo: typescriptLogo },
  //   ],
  // },
  // {
  //   title: 'Tools',
  //   skills: [
      
  //   ],
  // },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "Webverse Digital",
      date: "April 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
 export const education = [
  {
    id: 0,
    img: rwLogo, // Add your Red & White Multimedia logo
    school: "Red & White Multimedia Education",
    date: "2024 - 2025",
    grade: "Completed",
    desc: "Completed an intensive Full Stack Development course covering modern web technologies including HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, and more. Gained hands-on experience in building responsive web applications, RESTful APIs, and deploying full-stack projects. Worked on real-world projects to master both frontend and backend development concepts.",
    degree: "Full Stack Web Development",
  },
  {
    id: 1,
    img: bcaLogo, // Add your BCA college logo
    school: "Swarnim Startup Innovation University",
    date: "2023 - Present",
    grade: "Pursuing",
    desc: "I am currently pursuing my Bachelor of Computer Applications (BCA) and I am in my 2nd year. I am building a strong foundation in programming, data structures, databases, operating systems, and web development. Along with my studies, I actively work on real projects, especially in the MERN stack, to enhance my practical skills and apply theoretical concepts to real-world applications.",
    degree: "Bachelor of Computer Applications - BCA (Pursuing)",
  },
];

  
  export const projects = [
    {
  id: 1,
  title: "Onyx Consultancy Services",
  description: "A professional consultancy services website showcasing business solutions and services. Built with modern web technologies to provide an engaging user experience.",
  image: onyx, // Make sure to import this image
  tags: ["HTML", "CSS", "JavaScript", "React JS", "Responsive Design"],
  // github: "https://github.com/Raghav93160/onyx-consultancy", // Add your GitHub repo if available
  webapp: "https://onyxconsultancyservices.co/",
},
    {
      id: 2,
      title: "Noble Children Hospital & Neonatal Centre – Caring for Your Little Ones",
      description:
        "Noble Children Hospital & Neonatal Centre Website is a fully responsive React-based healthcare website designed for a pediatric and neonatal hospital. The site provides parents with complete information about hospital services, treatments, doctors, gallery, and contact details—presented in a clean and user-friendly UI.",
      image: nobel,
      tags: ["React JS"],
      // github: "https://github.com/Raghav93160/Fetching-Blog-data-",
      webapp: "https://www.noblechildrenhospital.com/",
    },
    {
      id: 3,
      title: "HealthCare Plus: Family Medical Center",
      description:
        "Professional Healthcare Website - A clean, modern React-based medical website featuring emergency care booking, specialist services, and patient statistics with a responsive design for family healthcare needs.",
      image: health,
      tags: ["React JS", "API"],
      // github: "https://github.com/Raghav93160/Margo-Ecomerce-Using-React",
      webapp: "https://www.bhagwatihospital.co/",
    },
    // {
    //   id: 4,
    //   title: "Gym Website",
    //   description:
    //     "A simple React-based gym website showcasing services, trainers, and fitness programs with responsive UI for smooth user experience.",
    //   image: gym,
    //   tags: ["React JS"],
    //   // github: "https://github.com/Raghav93160/gym-website",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 4,
    //   title: "MERN Stack Services Website",
    //   description:
    //     "A full-stack services website built with MongoDB, Express.js, React, and Node.js (MERN). Features dynamic service listings, responsive UI, and smooth navigation for showcasing company services.",
    //   image: service,
    //   tags: ["React JS", "Node.js", "Express.js", "Mongodb"],
    //   // github: "https://github.com/Raghav93160/DevAutomation",
    //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
    // },
    // {
    //   id: 3,
    //   title: "Email Validator NPM Package",
    //   description:
    //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    //   image: npmLogo,
    //   tags: ["React JS", "Node.js", "NPM", "Validation"],
    //   github: "https://github.com/codingmastr/cmtk-email-validator",
    //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    // },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  