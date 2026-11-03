
import {
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Wallet,
} from 'lucide-react';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Seu dinheiro, suas escolhas
          </div>

          <h1>
            Sua vida financeira
            <br />
            <span>em boas mãos.</span>
          </h1>

          <p className="hero-description">
            Organize suas contas, acompanhe suas rendas e tenha
            uma visão completa do seu dinheiro. Tudo isso em um
            aplicativo simples, prático e feito para você.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn-primary">
              Baixar PlanWin
              <ArrowDown size={19} />
            </a>

            <a href="#recursos" className="btn-secondary">
              Conhecer recursos
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-benefits">
            <div className="hero-benefit">
              <ShieldCheck size={19} />
              <span>Seus dados no dispositivo</span>
            </div>

            <div className="hero-benefit">
              <Smartphone size={19} />
              <span>Feito para Android</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-glow" />

          <div className="hero-image-main">
            <img
              src={`${import.meta.env.BASE_URL}images/dashboard.jpeg`}
              alt="Tela inicial do PlanWin com resumo financeiro"
            />
          </div>

          <div className="hero-floating-card">
            <div className="hero-floating-icon">
              <Wallet size={22} />
            </div>

            <div>
              <span className="hero-floating-label">
                Controle financeiro
              </span>

              <strong>Mais clareza, todo mês.</strong>
            </div>
          </div>

          <div className="hero-image-secondary">
            <img
              src={`${import.meta.env.BASE_URL}images/ResumoFinanceiro.jpeg`}
              alt="Resumo financeiro do aplicativo PlanWin"
            />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-line" />
        <span>Organize. Acompanhe. Evolua.</span>
        <div className="hero-bottom-line" />
      </div>
    </section>
  );
}

export default Hero;
