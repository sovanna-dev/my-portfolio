import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiFigma, SiTailwindcss } from "react-icons/si";
import cvFile from '../assets/CV_Sovanna.pdf';
import FadeInSection from "./FadeInSection";

const techIcons = [
  { icon: <FaHtml5 />, name: "HTML", color: "#e34f26" },
  { icon: <FaCss3Alt />, name: "CSS", color: "#1572b6" },
  { icon: <FaJs />, name: "JavaScript", color: "#f7df1e" },
  { icon: <FaReact />, name: "React", color: "#61dafb" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38bdf8" },
  { icon: <FaGitAlt />, name: "Git", color: "#f05032" },
  { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
  { icon: <SiFigma />, name: "Figma", color: "#a259ff" },
];

function Hero() {
  return (
    <section id="hero" className="hero">
  <FadeInSection direction="right">
    <div className="hero-content">
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">Sovanna Ra</h1>
      <h2 className="hero-title">Frontend Developer</h2>
      <p className="hero-desc">
        I build clean and responsive web experiences.
        Passionate about turning ideas into real products.
      </p>
      <div className="hero-icons">
        {techIcons.map((tech) => (
          <div className="hero-icon-item" key={tech.name} title={tech.name}>
            <span style={{ color: tech.color }}>{tech.icon}</span>
            <span className="hero-icon-label">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="hero-buttons">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
        <a href={cvFile} download="CV_YourName.pdf" className="btn-download">
          Download CV
        </a>
      </div>
    </div>
  </FadeInSection>

  
</section>
  );
}

export default Hero;