import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import parcel from "../assets/projects/parcel.jpg";
import foot_finesse from "../assets/projects/foot-finesse.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `<p></p>Hello, This is Md Sirajul Munir. Experienced Web Design & Developing professional with a Bachelor of Computer Science and Engineering focused in Computer Science from Premier University. I always love to play with creative ideas and innovation. It makes me feel good and passionate. To work in a position where discipline and a high-tech environment will ensure the development and make me more efficient and skillful where I can apply my knowledge and skills for continuous imrovement.</p>
<br><br>
<p>I am  familiar with the MERN(MongoDB, Express.js, React, Node.js) stack, which enables me to build robust and scalable web applications. Additionally, I have experience with firebase for backend as a service functionality and I am proficient in HTML, CSS and JavaScript for building engaging and responsive user interfaces.I have also delved into other areas, such as integrating payment systems using Stripe and working with C programming.Furthermore, I have Knowledge of Next.js, a React framework for server side rendering.</p>`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Scholarship-Management",
    client:'https://github.com/EngrMunir/Scholarship-Management-Client',
    server:'https://github.com/EngrMunir/Scholarship-Management-Server',
    live:'https://scholarship-management-50872.web.app',
    image: project1,
    description:
      "A fully functional website with features like post scholarship,apply for scholarship, accept or reject application, giving feedback, make payment fees, dashboard for user,admin,moderator and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Firebase"],
  },
  {
    title: "Parcel-Management",
    client:'https://github.com/EngrMunir/parcel-management-client',
    server:'https://github.com/EngrMunir/parcel-management-server',
    live:'https://parcel-management-f16f3.web.app',
    image: parcel,
    description:
      "Application for parcel delivery. User give parcel for delivery, admin will assign delivery men, dashboard for user,admin,moderator and user authentication.",
    technologies: ["Javascript", "React", "Node.js","Tailwind CSS", "MongoDB","Firebase"],
  },
  {
    title: "Foot-Finesse(Team Project)",
    client:'https://github.com/EngrMunir/Foot-Finesse',
    server:'https://github.com/EngrMunir/Foot-Finesse',
    live:'https://foot-finesse-alpha.vercel.app',
    image: foot_finesse,
    description:
      "This project is a fully functional e-commerce website for selling shoes. It allows users to browse, search, categorize, and purchase a variety of shoes. The site includes key features such as product filtering, email, payment, pagination for a seamless shopping experience.",
    technologies: ["Javascript", "NextJS", "Node.js","Tailwind CSS", "MongoDB"],
  },
  {
    title: "Laptop-Gallery",
    client:'https://github.com/EngrMunir/laptop-gallery-client',
    server:'https://github.com/EngrMunir/laptop-gallery-server',
    live:'https://laptop-galary.web.app',
    image: foot_finesse,
    description:
      "A responsive e-commerce platform for selling laptops, built using React.js, Javascript and MongoDB.",
    technologies: ["Javascript", "React", "Node.js","Tailwind CSS", "MongoDB"],
  },
  {
    title: "Library-Management",
    client:'https://github.com/EngrMunir/Library-Management-Clent',
    server:'https://github.com/EngrMunir/Library-Management-Server',
    live:'https://library-management-clien-5c580.web.app',
    image: project2,
    description:
      "An application for managing books with features such add book, borrow book, return book and user application",
    technologies: ["HTML", "CSS", "React", "Firebase","Mongodb", "Nodejs","Tailwind CSS"],
  },
  {
    title: "Jute-wooden-craft",
    client:'https://github.com/EngrMunir/jute-wooden-client',
    server:'https://github.com/EngrMunir/jute-wooden-server',
    live:'https://jute-wooden.web.app',
    image: project2,
    description:
      "An application for selling Wooden Craft, with features such as post craft, booking craft and user authentication.",
    technologies: ["HTML", "CSS", "React","Mongodb","Firebase","Nodejs"],
  },
  // {
  //   title: "Portfolio Website",
  //   client:'https://github.com/EngrMunir/Munir-Portfolio',
  //   server:'https://github.com/EngrMunir/Munir-Portfolio',
  //   live:'https://react-portfolio-rose-alpha.vercel.app',
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Tailwind CSs"],
  // }
];

export const CONTACT = {
  address: "Chattogram, Bangladesh",
  phoneNo: "+8801831013421",
  email: "smsirajulmonir@gmail.com",
};
