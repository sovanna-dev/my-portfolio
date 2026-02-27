import FadeInSection from "./FadeInSection";

const projects = [
 {
    id: 1,
    title: "SmartShop",
    desc: "A full-featured Android e-commerce app with real-time cart, order tracking, and Firebase authentication. Built with MVVM architecture and Material Design 3.",
    tags: ["Kotlin", "Firebase", "MVVM", "Android", "Firestore"],
    live: null,
    github: "https://github.com/sovanna-dev/SmartShop",
  },
  {
    id: 2,
    title: "Personal Portfolio",
    desc: "My first portfolio website built from scratch with vanilla HTML, CSS and JavaScript. No frameworks, no libraries.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://sovanna-dev.github.io/portfolio-html-js",
    github: "https://github.com/sovanna-dev/portfolio-html-js",
  },
  {
    id: 1,
    title: "Personal Portfolio Website",
    desc: "Designed and built a fully responsive portfolio from scratch using React. Features include smooth scroll animations with Framer Motion, active nav tracking, EmailJS contact form, and CI/CD deployment via GitHub Pages.",
    tags: ["React", "Framer Motion", "EmailJS", "GitHub Pages", "Responsive Design"],
    live: "https://sovanna-dev.github.io/my-portfolio",
    github: "https://github.com/sovanna-dev/my-portfolio",
  },
];


function Projects() {
  return (
    <section id="projects" className="projects">
      <FadeInSection>
        <h2 className="section-title">Projects</h2>
      </FadeInSection>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <FadeInSection key={project.id} delay={index * 0.1}>
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">Live</a>
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

export default Projects;