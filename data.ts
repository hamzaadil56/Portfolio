import ProjectImage from "@/assets/images/manage-landing-page.png";
import MERNImage from "@/assets/images/mern-stack-app.png";
import EcommerceImage from "@/assets/images/React-Redux.png";
import RestaurantImage from "@/assets/images/restaurant-landing-page.png";
import ManageImage from "@/assets/images/manage-landing-page.png";
import ReactLogo from "@/assets/logos/reactjs.png";
import nextLogo from "@/assets/logos/nextjs.png";
import nodeLogo from "@/assets/logos/nodejs.png";
import typescriptLogo from "@/assets/logos/typescript.png";
import reduxLogo from "@/assets/logos/redux.png";
import firebaseLogo from "@/assets/logos/firebase.png";
import gitLogo from "@/assets/logos/git.png";
import tailwindLogo from "@/assets/logos/tailwindcss.png";
import GithubIcon from "@/assets/icons/github.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import PanaverseDAO from "@/assets/images/panaverse-dao.png";

export const projects = [
  {
    image: ProjectImage,
    title: "Manage-Landing Page",
    description:
      "Took a challenge on frontendmentor.io website to build a landing page from the gien template.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/hamzaadil56/Manage-Landing-page",
    websiteURL: "https://manage-landing-page56.netlify.app/",
  },

  {
    image: EcommerceImage,
    title: "React-Redux Ecommerce App",
    description:
      "Ecommerce Garments Website built with React and Redux. For Authentication Firebase was used.",
    technologies: ["React", "Redux", "Firebase"],
    githubLink: "https://github.com/hamzaadil56/Ecommerce-React-Firebase-App",
    websiteURL: "https://main--ecommerce-firebase-react-app.netlify.app/",
  },

  {
    image: PanaverseDAO,
    title: "Panaverse DAO Website",
    description:
      "An Education Website which offer a One Year Web 3.0 and Metaverse Developer Program which includes specilization id different emrging technologies. Visit site for more details.",
    technologies: ["Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/hamzaadil56/Panaverse-Dao-",
    websiteURL: "https://panaverse-dao-theta.vercel.app/",
  },
  {
    image: MERNImage,
    title: "Mern Stack Ecommerce App",
    description:
      "Ecommerce Garments Website built with MERN stack. For Authentication JWT was used and cloudinary for storing images.  ",
    technologies: [
      "React.js",
      "Material UI",
      "Node.js",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
    githubLink: "https://github.com/hamzaadil56/MERN-STACK-ECOMMERCE-APP",
    websiteURL: "https://github.com/hamzaadil56/MERN-STACK-ECOMMERCE-APP",
  },
];

export const skills = [
  {
    skill: "React.js",
    logo: ReactLogo,
  },
  {
    skill: "Next.js",
    logo: nextLogo,
  },
  {
    skill: "Tailwind CSS",
    logo: tailwindLogo,
  },
  {
    skill: "Node.js",
    logo: nodeLogo,
  },
  {
    skill: "Redux",
    logo: reduxLogo,
  },
  {
    skill: "Firebase",
    logo: firebaseLogo,
  },
  {
    skill: "Typescript",
    logo: typescriptLogo,
  },
  {
    skill: "Git",
    logo: gitLogo,
  },
];
export const links = [
  {
    icon: GithubIcon,
    url: "https://github.com/hamzaadil56",
  },
  {
    icon: facebookIcon,
    url: "https://web.facebook.com/hamza.adil.549",
  },
  {
    icon: instagramIcon,
    url: "https://www.instagram.com/hamzaadil56/",
  },
  {
    icon: twitterIcon,
    url: "https://twitter.com/hamza_chemE_dev",
  },
  {
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/muhammad-hamza-adil/",
  },
];
