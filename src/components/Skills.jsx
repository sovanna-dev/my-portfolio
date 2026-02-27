import FadeInSection from "./FadeInSection";

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Styling", items: ["Tailwind CSS", "Bootstrap", "Figma"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { category: "Learning", items: ["Node.js", "MongoDB"] },
];


function Skills() {
  return (
    <section id="skills" className="skills">
      <FadeInSection>
        <h2 className="section-title">Skills</h2>
      </FadeInSection>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <FadeInSection key={group.category} delay={index * 0.1}>
            <div className="skill-card">
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}

export default Skills;