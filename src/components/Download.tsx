
import {
  Download as DownloadIcon,
  Smartphone,
  ShieldCheck,
  Code2,
  ArrowUpRight,
} from 'lucide-react';

function Download() {
  return (
    <section className="download-section section-padding" id="download">
      <div className="container">
        <div className="download-card">
          <div className="download-content">
            <span className="download-label">
              <span className="download-label-dot" />
              Seu próximo passo
            </span>

            <h2>
              Organize suas finanças.
              <br />
              <span>Comece com o PlanWin.</span>
            </h2>

            <p>
              Tenha suas contas, rendas e relatórios financeiros
              sempre à mão. Baixe o aplicativo e comece a cuidar
              melhor do seu dinheiro.
            </p>

            <a
              href={`${import.meta.env.BASE_URL}planwin.apk`}
              className="download-button"
              download="PlanWin.apk"
            >
              <DownloadIcon size={21} />
              Baixar para Android
            </a>

            <div className="download-details">
              <span>
                <Smartphone size={17} />
                Aplicativo Android
              </span>

              <span>
                <ShieldCheck size={17} />
                Dados armazenados localmente
              </span>
            </div>
          </div>

          <div className="download-visual">
            <div className="download-circle download-circle-one" />
            <div className="download-circle download-circle-two" />

            <div className="download-phone">
              <img
                src={`${import.meta.env.BASE_URL}images/dashboard.jpeg`}
                alt="Tela inicial do PlanWin"
                loading="lazy"
              />
            </div>

            <div className="download-floating">
              <div className="download-floating-icon">
                <DownloadIcon size={20} />
              </div>

              <div>
                <strong>PlanWin</strong>
                <span>Seu controle financeiro</span>
              </div>
            </div>
          </div>
        </div>

        <div className="download-github">
          <div>
            <Code2 size={22} />

            <p>
              Quer conhecer o projeto por dentro?
              <span> Confira o código-fonte do PlanWin.</span>
            </p>
          </div>

          <a
            href="https://github.com/Lucianooli/PlanWin"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Download;
