/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hammad's Portfolio",
  description:
    "A passionate full-stack developer committed to building end-to-end digital solutions that are scalable, user-centric, and impactful — blending technology and purpose to solve real-world problems",
  og: {
    title: "Hammad Bin Tariq's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/", //Needs to be changed
  },
};

//Home Page
const greeting = {
  title: "Hammad Bin Tariq",
  logo_name: "HammadTariq",
  nickname: "",
  subTitle:
    "A passionate full-stack developer committed to building end-to-end digital solutions that are scalable, user-centric, and impactful — blending technology and purpose to solve real-world problems",
  resumeLink:
    "https://drive.google.com/file/d/1Ir4WNaCoBwWX3Erx9dNS_UIOOcWZEg45/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio", //Needs to be changed
  githubProfile: "https://github.com/Hammad-Tariq007",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Hammad-Tariq007",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hammad-bin-tariq-b040a4281",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hammadtariq0007@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/HammadTariq0007?t=LDql6TUDGm68zIp1s4iDCw&s=09",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Database Management",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing, managing, and optimizing relational and NoSQL databases",
        "⚡ Implementing secure user authentication and role-based access control",
        "⚡ Managing real-time databases and integrating with full-stack applications",
      ],
      softwareSkills: [
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Deployment & Hosting",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying full-stack applications using modern cloud hosting platforms",
        "⚡ Managing continuous deployment pipelines and Git-based workflows",
        "⚡ Hosting real-time databases and serverless backends for dynamic web apps",
      ],
      softwareSkills: [
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Firebase Hosting",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "cPanel",
          fontAwesomeClassname: "simple-icons:cpanel",
          style: {
            color: "#FF6C2C",
          },
        },
        {
          skillName: "GitHub Pages",
          fontAwesomeClassname: "simple-icons:githubpages",
          style: {
            color: "#121013",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of the Punjab, Gujranwala Campus",
      subtitle: "Bachelor of Science in Information Technology (BSIT)",
      logo_path: "pugc.png",
      alt_name: "Punjab University",
      duration: "2021 – 2025",
      descriptions: [
        "⚡ Graduated with a CGPA of 3.97/4.00 — ranked 1st in the Department of Information Technology.",
        "⚡ Completed coursework in Data Structures, Web & Mobile Development, AI, Cybersecurity, DBMS, OOP, and Operating Systems.",
        "⚡ Led key projects including FitnessFreaks (AI-powered fitness platform) and several MERN-stack e-commerce apps.",
        "⚡ Honored with the Honhaar Scholarship and CM Punjab Laptop Award for academic distinction.",
      ],
      website_link: "http://pugc.edu.pk",
    },
    {
      title: "Punjab Group of Colleges, Gujranwala",
      subtitle: "Intermediate (F.Sc. Pre-Medical)",
      logo_path: "pgc-logo.png",
      alt_name: "Punjab Group of Colleges",
      duration: "2017 – 2019",
      descriptions: [
        "⚡ Studied core science subjects including Biology, Chemistry, and Physics with top academic scores.",
        "⚡ Received merit-based scholarship for academic excellence and strong subject performance.",
        "⚡ Developed analytical, communication, and time management skills through academic and extracurricular involvement.",
      ],
      website_link: "https://pgc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Development",
      subtitle: "- Angela yu",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bjZSvf7c5dPLZ5O5cm5iRLDP54rfZLUo/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#5f0f40",
    },
    {
      title: "Artificial Intelligence & Data Science",
      subtitle: "- Rufus Steward",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1So0BUEe-PVl7QiQlBgPBMY_VfH3R4H41/view?usp=sharing",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Fullstack Development",
      subtitle: "Benjamin Shah",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1iRo8pxB2wtWVsNwFojCi6fI-AOxJQcto/view?usp=sharing",
      alt_name: "Coursera",
      color_code: "#023047",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship, Projects, and Technical Leadership",
  description:
    "Skilled in front-end and full-stack development with hands-on experience in responsive UI design, modern frameworks, and agile workflows. Experienced in leading technical projects and delivering scalable digital solutions using React.js, Node.js, and Git.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Front-End Developer Intern",
          company: "IvisionsTech Software House",
          company_url: "", // Update if real URL is different
          logo_path: "legato_logo.png", // Replace with actual logo filename
          duration: "June 2024 – Aug 2024",
          location: "Gujranwala, Pakistan",
          description:
            "Developed responsive and interactive user interfaces using React.js and Tailwind CSS. Collaborated in Agile sprints, participated in code reviews, and contributed to real-world client projects using Git-based workflows. Gained practical experience in frontend development, team coordination, and UI optimization.",
          color: "#1d4ed8",
        },
        {
          title: "Freelance Full-Stack Web Developer",
          company: "Self-Employed",
          company_url: "https://github.com/Hammad-Tariq007", // Or link to your portfolio
          logo_path: "freecopy_logo.png", // Use a general freelance icon/logo
          duration: "Jan 2023 – Present",
          location: "Remote",
          description:
            "Built and deployed scalable web applications including AI-powered fitness platforms and e-commerce websites. Worked across the MERN stack with focus on user experience, clean architecture, and secure database integration. Delivered tailored client solutions with modern tools like React.js, Node.js, Supabase, and Stripe.",
          color: "#16a34a",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-End Developer Intern",
          company: "IvisionsTech Software House",
          company_url: "", // Update if real URL is different
          logo_path: "legato_logo.png", // Replace with actual logo filename
          duration: "June 2024 – Aug 2024",
          location: "Gujranwala, Pakistan",
          description:
            "Developed responsive and interactive user interfaces using React.js and Tailwind CSS. Collaborated in Agile sprints, participated in code reviews, and contributed to real-world client projects using Git-based workflows. Gained practical experience in frontend development, team coordination, and UI optimization.",
          color: "#1d4ed8",
        },
        {
          title: "IT Intern – Strategic Media & Technology",
          company:
            "Inter-Services Public Relations (ISPR), Pakistan Armed Forces",
          company_url: "https://ispr.gov.pk/",
          logo_path: "ispr_logo.png", // Replace with actual logo if available
          duration: "July 2025 – Aug 2025",
          location: "Rawalpindi, Pakistan",
          description:
            "Selected for a prestigious internship with ISPR, focusing on IT-driven media systems, cybersecurity protocols, and digital communication workflows. Gained exposure to secure IT environments, strategic content management, and the role of technology in national defense communication.",
          color: "#374151",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Tech Lead – Final Year Project",
          company: "University of the Punjab, Gujranwala Campus",
          company_url: "https://pu.edu.pk/",
          logo_path: "pugc.png",
          duration: "July 2025",
          location: "Gujranwala, Pakistan",
          description:
            "Led a team of student developers to organize and showcase capstone projects during the university's annual FYP Expo. Facilitated live demos, coordinated technical setup, and served as liaison between faculty and teams.",
          color: "#800000",
        },
        {
          title: "Class Representative – BSIT Department",
          company: "University of the Punjab, Gujranwala Campus",
          company_url: "https://pu.edu.pk/",
          logo_path: "pugc.png",
          duration: "2021 – 2025",
          location: "Gujranwala, Pakistan",
          description:
            "Served as the elected representative for the BSIT batch, managing communication between students and faculty, organizing department-level events, and resolving academic and administrative queries.",
          color: "#800000",
        },
        {
          title: "Event Volunteer – Tech Carnival",
          company: "Punjab Group of Colleges",
          company_url: "https://pgc.edu/",
          logo_path: "pgc-logo.png",
          duration: "Feb 2019",
          location: "Gujranwala, Pakistan",
          description:
            "Assisted in organizing Punjab Group’s regional Tech Carnival, helping with event registration, scheduling, and coordinating guest speaker sessions on emerging technologies.",
          color: "#1F3C88",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span modern web technologies, including full-stack development, UI/UX design, and cloud-based deployments. From AI-powered fitness platforms to dynamic e-commerce sites, I focus on building smart, scalable, and user-centric digital solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact2.png",
    description:
      "I’m available across most social platforms and typically reply within 24 hours. Feel free to reach out—I’d be glad to connect or collaborate. I can assist you with Front-End Development, Full-Stack Projects, React.js, Web Design, AI-Powered Applications, and more.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
