const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Nov 15, 2025",
    title: "Project Lead - Hackathon National Cybertech",
    image: "/images/hackathon.jpg",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Oct 27, 2024",
    title: "Project Lead - Workshop Programming",
    image: "/images/workshop.jpg",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
];

const techStack = [
  {
    category: "Programming Languages",
    items: ["Java", "PHP", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend & Full-Stack",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend Frameworks",
    items: ["Spring Boot", "Laravel", "Filament"],
  },
  {
    category: "Databases, ORM & Caching",
    items: ["PostgreSQL", "Redis", "Drizzle ORM"],
  },
  {
    category: "Architecture & Messaging",
    items: ["Microservices", "Kafka", "API Gateway", "Eureka Server", "CQRS"],
  },
  {
    category: "DevOps & Observability",
    items: ["Docker", "Jenkins CI/CD", "ELK Stack", "Prometheus", "Grafana"],
  },
  {
    category: "Mobile & AI",
    items: ["Flutter", "NLP", "IndoBERT"],
  },
  {
    category: "Security & Methodology",
    items: ["Auth.js", "Agile Project Management"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/rmaisshadiq",
  },
  {
    id: 2,
    text: "Whatsapp",
    icon: "/icons/whatsapp.svg",
    bg: "#4bcb63",
    link: "https://wa.me/+6283180200916",
  },
  {
    id: 3,
    text: "Instagram",
    icon: "/icons/instagram.svg",
    bg: "#6228d7",
    link: "https://www.instagram.com/r_maisshadiq",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/rmaisshadiq",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  // {
  //   id: 2,
  //   icon: "/icons/gicon2.svg",
  //   title: "Memories",
  // },
  // {
  //   id: 3,
  //   icon: "/icons/file.svg",
  //   title: "Places",
  // },
  // {
  //   id: 4,
  //   icon: "/icons/gicon4.svg",
  //   title: "People",
  // },
  // {
  //   id: 5,
  //   icon: "/icons/gicon5.svg",
  //   title: "Favorites",
  // },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal-1.JPG",
  },
  {
    id: 2,
    img: "/images/rafi.jpg",
  },
  {
    id: 3,
    img: "/images/gal-3.JPG",
  },
  {
    id: 4,
    img: "/images/gal-4.jpg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Cantigi RentCar Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Cantigi RentCar Website.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "As the Project Manager for PT. Wanderlust Cantigi International, I led a cross-functional team of four to engineer a comprehensive, end-to-end car rental web platform. Utilizing Agile methodologies, I directed the entire project lifecycle to ensure streamlined communication and the iterative delivery of high-priority features.",
            "Beyond team management, I actively participated in architecting the system using PHP and the Laravel framework, strategically leveraging the Filament plugin to develop a highly efficient and intuitive administrative dashboard.",
            "By collaborating directly with stakeholders to translate complex business requirements into actionable technical specifications, we successfully delivered a scalable, user-centric solution. I oversaw the seamless deployment and ongoing maintenance of the production environment, resulting in a fully operational platform that is currently live at cantigitours.com.",
          ],
        },
        {
          id: 2,
          name: "cantigitours.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://cantigitours.com",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "cantigitours.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Sistem Informasi Kerusakan Fasilitas (SIPAKER)",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "SIPAKER.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "As a Full-stack Engineer, I spearheaded the development of SIPAKER, a comprehensive facility damage reporting system designed to digitize and automate maintenance workflows for the General Affairs Sub-department at Politeknik Negeri Padang.",
            "Collaborating directly with the Head of General Affairs, I translated institutional requirements into a scalable, production-ready web application built with React and Next.js. To ensure high performance and data integrity, I architected a robust database schema using PostgreSQL paired with Drizzle ORM for type-safe operations.",
            "I further optimized system responsiveness by integrating Redis as a caching layer, which significantly reduced database load and accelerated data retrieval for recurring queries. To safeguard the platform, I engineered a secure authentication system utilizing Auth.js, implementing strict role-based access control (RBAC) to seamlessly manage distinct user tiers—reporters, technicians, and administrators. Ultimately, this end-to-end solution successfully enhanced reporting transparency and streamlined repair turnaround times across the campus.",
          ],
        },
        {
          id: 2,
          name: "SIPAKER Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/rmaisshadiq/sipaker-pnp",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "sipaker.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Microservices Library Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Microservices Library Management System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "As a Backend Engineer, I architected and developed a highly scalable Library Management System utilizing a robust microservices architecture built on Java Spring Boot. To ensure high availability and seamless inter-service communication, I orchestrated service discovery and network routing through the implementation of Eureka Server and an API Gateway.",
            "I integrated a Kafka message broker to handle asynchronous, event-driven processes, while strategically employing the CQRS (Command Query Responsibility Segregation) pattern to optimize data consistency and query performance under heavy loads.",
            "Emphasizing reliability and operational efficiency, I containerized the entire application ecosystem using Docker and established a fully automated CI/CD pipeline via Jenkins, which significantly reduced deployment lead times. Furthermore, to maintain proactive system health, I deployed a comprehensive observability stack, leveraging the ELK Stack for centralized logging alongside Prometheus and Grafana for real-time infrastructure monitoring and alerting.",
          ],
        },
        {
          id: 2,
          name: "Microservices Library Management System Repository",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/rmaisshadiq/microservices",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/rafi.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/casual-me.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/rafi.jpg",
      description: [
        "Hi, I'm a Software Engineer & Tech Lead.",
        "Currently pursuing my degree at Politeknik Negeri Padang, I specialize in architecting robust backend systems (Microservices) and developing intuitive full-stack applications (Next.js). Combining deep technical expertise with strong Agile project management experience, I build scalable digital products that solve real-world problems. Currently exploring the intersection of Mobile Development and AI.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
