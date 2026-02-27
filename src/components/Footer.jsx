import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-name">Sovanna Ra</p>
        <p className="footer-tagline">Built with React. Deployed on GitHub Pages.</p>

        <div className="footer-links">
          <a
            href="https://github.com/sovanna-dev"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sovanna-ra-866504347/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:rasovanna785@email.com" title="Email">
            <MdEmail />
          </a>
          <a
            href="https://t.me/sovannara3"
            target="_blank"
            rel="noreferrer"
            title="Telegram"
          >
            <FaTelegram />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sovanna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;