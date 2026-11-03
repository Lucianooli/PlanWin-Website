
import { Code2, ArrowUp } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <a href="#inicio" className="footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}images/favicon.png`}
              alt="PlanWin"
            />
            <span>PlanWin</span>
          </a>

          <p>
            Mais clareza para suas finanças.
            <br />
            Mais tranquilidade para sua vida.
          </p>

          <nav className="footer-links">
            <a href="#inicio">Início</a>
            <a href="#recursos">Recursos</a>
            <a href="#telas">O aplicativo</a>
            <a href="#download">Download</a>
          </nav>

          <a
            href="https://github.com/Lucianooli/PlanWin"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
            aria-label="PlanWin no GitHub"
          >
            <Code2 size={21} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} PlanWin. Todos os direitos reservados.
          </span>

          <a href="#inicio" className="footer-top">
            Voltar ao início
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
