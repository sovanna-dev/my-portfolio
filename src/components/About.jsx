import profileImg from '../assets/profile.jpg';
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <section id="about" className="about">
      <FadeInSection>
        <h2 className="section-title">About Me</h2>
      </FadeInSection>
      <div className="about-content">
        <FadeInSection direction="right" delay={0.1}>
          <div className="about-image">
            <img src={profileImg} alt="About" />
          </div>
        </FadeInSection>
        <FadeInSection direction="left" delay={0.2}>
          <div className="about-text">
            <p>
                I'm a frontend developer based in Cambodia. I enjoy building
                clean, responsive websites that are easy to use and nice to look at.
            </p>
            <p>
                I'm currently looking for opportunities where I can grow,
                contribute, and work on real products that matter.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Name</span>
                <span className="info-value">Sovanna Ra</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">rasovanna785@email.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Phnom Penh, Cambodia</span>
              </div>
              <div className="info-item">
                <span className="info-label">Available</span>
                <span className="info-value open">Open to Work</span>
              </div>
            </div>
            <a href="#contact" className="btn-primary">Let's Talk</a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default About;