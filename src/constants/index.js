import project1 from "../assets/projects/project-1.jpg";
import Tutor from "../assets/projects/tutor.PNG";
import CarShop from "../assets/projects/carshop.PNG";
import parcel from "../assets/projects/parcel.jpg";
import foot_finesse from "../assets/projects/foot-finesse.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `<p></p>Hello, This is Md Sirajul Munir. Experienced Web Design & Developing professional with a Bachelor of Computer Science and Engineering focused in Computer Science from Premier University. I always love to play with creative ideas and innovation. It makes me feel good and passionate. To work in a position where discipline and a high-tech environment will ensure the development and make me more efficient and skillful where I can apply my knowledge and skills for continuous improvement.</p>
<br><br>
<p>I am  familiar with the MERN(MongoDB, Express.js, React, Node.js) stack, which enables me to build robust and scalable web applications. Additionally, I have experience with firebase for backend as a service functionality and I am proficient in HTML, CSS and JavaScript, Typescript for building engaging and responsive user interfaces.I have also delved into other areas, such as integrating payment systems using Stripe and working with C programming.Furthermore, I have Knowledge of Next.js, a React framework for server side rendering.</p>`;

export const EXPERIENCES = [
  {
    year: "January2025 - Present",
    role: "MERN Stack Developer Intern",
    company: "Tori IT Chattogram",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Typescript", "React.js", "Next.js", "mongoDB","Express.js","Nodejs"],
  },
];

export const PROJECTS = [
  {
    id:1,
    title:"Tutor Link",
    client:"https://github.com/EngrMunir/Tutor-Link-Frontend.git",
    server:"https://github.com/MohammadTanvir881/Tutiors-Link-Backend.git",
    live:"https://tutor-link-frontend-nine.vercel.app",
    image:Tutor,
    description:"TutorLink is a full-stack web application designed to bridge the gap between students and qualified tutors. It offers a seamless and user-friendly platform where students can search, filter, and connect with subject experts based on their learning needs, while tutors can manage their profiles and engage with potential learners.",
    technologies:["Nextjs","ExpressJS","NodeJs","MongoDB","Typescript","Redux"],
  },
  {
    id:2,
    title:"Car Shop",
    client:"https://github.com/EngrMunir/Car-Store-Client",
    server:"https://github.com/EngrMunir/Car-Store-Serve",
    live:"https://car-store-frontend-drab.vercel.app",
    image:CarShop,
    description:"Car Shop is a full-stack e-commerce web application designed for buying and selling cars with an intuitive and responsive interface. The platform supports role-based functionality, allowing admins to manage the inventory, customers to explore and purchase vehicles, and delivery personnel to manage order logistics.",
    technologies:["React","ExpressJS","NodeJs","MongoDB","Typescript","Redux"],
  },
  {
    id:3,
    title: "Scholarship-Management",
    client:'https://github.com/EngrMunir/Scholarship-Management-Client',
    server:'https://github.com/EngrMunir/Scholarship-Management-Server',
    live:'https://scholarship-management-50872.web.app',
    image: project1,
    description:
      "A fully functional website with features like post scholarship,apply for scholarship, accept or reject application, giving feedback, make payment fees, dashboard for user,admin,moderator and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Firebase"],
  },
  // {
  //   id:4,
  //   title: "Parcel-Management",
  //   client:'https://github.com/EngrMunir/parcel-management-client',
  //   server:'https://github.com/EngrMunir/parcel-management-server',
  //   live:'https://parcel-management-f16f3.web.app',
  //   image: parcel,
  //   description:
  //     "Application for parcel delivery. User give parcel for delivery, admin will assign delivery men, dashboard for user,admin,moderator and user authentication.",
  //   technologies: ["Javascript", "React", "Node.js","Tailwind CSS", "MongoDB","Firebase"],
  // },
  // {
  //   id:5,
  //   title: "Foot-Finesse(Team Project)",
  //   client:'https://github.com/EngrMunir/Foot-Finesse',
  //   server:'https://github.com/EngrMunir/Foot-Finesse',
  //   live:'https://foot-finesse-alpha.vercel.app',
  //   image: foot_finesse,
  //   description:
  //     "This project is a fully functional e-commerce website for selling shoes. It allows users to browse, search, categorize, and purchase a variety of shoes. The site includes key features such as product filtering, email, payment, pagination for a seamless shopping experience.",
  //   technologies: ["Javascript", "NextJS", "Node.js","Tailwind CSS", "MongoDB"],
  // },
  // {
  //   title: "Laptop-Gallery",
  //   client:'https://github.com/EngrMunir/laptop-gallery-client',
  //   server:'https://github.com/EngrMunir/laptop-gallery-server',
  //   live:'https://laptop-galary.web.app',
  //   image: foot_finesse,
  //   description:
  //     "A responsive e-commerce platform for selling laptops, built using React.js, Javascript and MongoDB.",
  //   technologies: ["Javascript", "React", "Node.js","Tailwind CSS", "MongoDB"],
  // },
  // {
  //   title: "Library-Management",
  //   client:'https://github.com/EngrMunir/Library-Management-Clent',
  //   server:'https://github.com/EngrMunir/Library-Management-Server',
  //   live:'https://library-management-clien-5c580.web.app',
  //   image: project2,
  //   description:
  //     "An application for managing books with features such add book, borrow book, return book and user application",
  //   technologies: ["HTML", "CSS", "React", "Firebase","Mongodb", "Nodejs","Tailwind CSS"],
  // },
  // {
  //   title: "Jute-wooden-craft",
  //   client:'https://github.com/EngrMunir/jute-wooden-client',
  //   server:'https://github.com/EngrMunir/jute-wooden-server',
  //   live:'https://jute-wooden.web.app',
  //   image: project2,
  //   description:
  //     "An application for selling Wooden Craft, with features such as post craft, booking craft and user authentication.",
  //   technologies: ["HTML", "CSS", "React","Mongodb","Firebase","Nodejs"],
  // },
];

export const CONTACT = {
  address: "Mirpur-10, Dhaka, Bangladesh",
  phoneNo: "+8801831013421",
  email: "smsirajulmonir@gmail.com",
};

export const projects = [
  {
    id: 1,
    slug: "tutor-connect-platform",
    title: "Tutor Connect - Online Tutor Marketplace",
    description:
      "A full-featured MERN-based platform connecting students with qualified tutors for personalized learning.",
    longDescription: [
      "Tutor Connect is an EdTech marketplace that enables students to discover and book sessions with verified tutors based on subject, rating, and availability.",
      "The platform features a robust filtering system, live chat, secure payments, and detailed tutor profiles to ensure a smooth and reliable learning experience.",
      "This project was designed to address accessibility gaps in education by connecting learners with skilled educators regardless of location.",
    ],
    imageUrl:
      "https://i.ibb.co/CKrRMv3m/tutor.png",

    galleryImages: [
      "https://i.ibb.co/nNvvTLwx/Capture.png",
      "https://i.ibb.co/YTpJn72c/Capture1.png",
    ],
    liveUrl: "https://tutor-link-frontend-rho.vercel.app",
    githubUrl: "https://github.com/EngrMunir/Tutor-Link-Frontend.git",
    techStack: [
      { name: "MongoDB", color: "green" },
      { name: "Express.js", color: "yellow" },
      { name: "Next.js", color: "blue" },
      { name: "Node.js", color: "lime" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "TypeScript", color: "purple" },
    ],
    features: [
      "User authentication with role-based access",
      "Tutor search with filters (subject, rating, location)",
      "Real-time chat between students and tutors",
      "Secure Stripe payment integration",
      "Tutor application and admin approval workflow",
    ],
    challenges: [
      {
        challenge: "Dynamic filtering and pagination",
        solution:
          "Used MongoDB aggregation pipeline and client-side debounce for efficient filtering",
      },
      {
        challenge: "Payment flow integration",
        solution:
          "Integrated Stripe Checkout with custom success/failure redirection",
      },
    ],
    lessonsLearned: [
      "Gained practical experience designing scalable APIs with Express and MongoDB.",
      "Learned to structure large-scale React apps with reusable components and clean routing.",
      "Realized the importance of UX and onboarding flow for multi-role platforms.",
    ],
  },

  {
    id: 2,
    slug: "carhop-platform",
    title: "CarShop",
    description:
      "A dynamic e-commerce platform for browsing, searching, and purchasing cars with integrated cart and payment functionality.",
    longDescription: [
      "CarShop is a full-stack web application designed for car enthusiasts to discover, explore, and buy car from a wide catalog.",
      "The platform includes category-based browsing, real-time search, user authentication, cart management, and a secure checkout system.",
      "This project was built to simulate a professional-grade online carstore with responsive design and performance optimization.",
    ],
    imageUrl:
      "https://i.ibb.co/JWRC8G51/carshop.png",
    galleryImages: [
      "https://i.ibb.co/Xf3Y4fKQ/Capture2.png",
      "https://i.ibb.co/cSFR6XsW/Capture3.png",
    ],
    liveUrl: "https://car-store-frontend-drab.vercel.app",
    githubUrl: "https://github.com/EngrMunir/Car-Store-Client",
    techStack: [
      { name: "React", color: "blue" },
      { name: "MongoDB", color: "green" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Stripe", color: "purple" },
      { name: "Redux", color: "blue" },
      { name: "TypeScript", color: "indigo" },
    ],
    features: [
      "User authentication and profile management",
      "Real-time search and filter for books",
      "Cart system with quantity management",
      "Stripe-powered payment gateway",
      "Admin dashboard for product management",
    ],
    challenges: [
      {
        challenge: "Dynamic search optimization",
        solution: "Implemented debounced queries and MongoDB indexing",
      },
      {
        challenge: "Handling secure transactions",
        solution: "Integrated SSLCOMMERZ Checkout with webhook handling",
      },
    ],
    lessonsLearned: [
      "Learned to manage e-commerce states across components",
      "Gained experience with secure backend integrations and deployment",
    ],
  },
  {
    id: 3,
    slug: "scholarship-management",
    title: "Scholarship-Management",
    description:
      "A fully functional website for scholarship management",
    longDescription: [
       "A fully functional website with features like post scholarship,apply for scholarship, accept or reject application, giving feedback, make payment fees, dashboard for user,admin,moderator and user authentication.",
    ],
    imageUrl:
      "https://i.ibb.co/wZXvc94P/Capture4.png", // Corrected screenshot URL
    galleryImages: [
      "https://i.ibb.co/v4YNY9qK/Capture5.png", // Corrected gallery image URL
      "https://i.ibb.co/SXwQvxP5/Capture6.png", // Corrected gallery image URL
    ],

    liveUrl: "https://scholarship-management-50872.web.app",
    githubUrl: "https://github.com/EngrMunir/Scholarship-Management-Client",
    techStack: [
       { name: "React", color: "blue" },
      { name: "MongoDB", color: "green" },
      { name: "Tailwind CSS", color: "cyan" },
      { name: "Stripe", color: "purple" },
      { name: "NodeJS", color: "blue" },
      { name: "Firebase", color: "yellow" },
    ],
    features: [
      "Real-time word formation with a time limit",
      "Scholarship status tracking",
      "Responsive design for mobile and desktop users",
    ],
    challenges: [
      {
        challenge: "Handling dynamic DOM updates",
        solution:
          "Used event listeners and DOM",
      },
      {
        challenge: "Creating a responsive design",
        solution:
          "Leveraged Tailwind CSS's utility-first classes to ensure the website worked across different screen sizes.",
      },
    ],
    lessonsLearned: [
      "Enhanced my JavaScript skills by using DOM manipulation to create an interactive experience.",
      "Gained experience in building responsive UIs with Tailwind CSS.",
      "Learned to handle user interactions and real-time updates",
    ],
  },
];
