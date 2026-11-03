
import { ArrowLeft, ArrowRight, Smartphone } from 'lucide-react';

const telas = [
  {
    imagem: 'dashboard.jpeg',
    titulo: 'Visão geral',
    descricao: 'Acompanhe sua situação financeira na tela inicial.',
  },
  {
    imagem: 'GerenciarContas.jpeg',
    titulo: 'Gerenciamento de contas',
    descricao: 'Organize suas contas e acompanhe seus vencimentos.',
  },
  {
    imagem: 'ContaPedente.jpeg',
    titulo: 'Contas pendentes',
    descricao: 'Tenha controle sobre o que ainda precisa ser pago.',
  },
  {
    imagem: 'outro.jpeg',
    titulo: 'Organização financeira',
    descricao: 'Gerencie seus lançamentos com praticidade.',
  },
  {
    imagem: 'Relatorio.jpeg',
    titulo: 'Relatórios',
    descricao: 'Entenda seus gastos através de gráficos.',
  },
  {
    imagem: 'ResumoFinanceiro.jpeg',
    titulo: 'Resumo financeiro',
    descricao: 'Confira rendas, despesas e saldo do período.',
  },
  {
    imagem: 'TemaClaro.jpeg',
    titulo: 'Tema claro',
    descricao: 'Uma experiência visual adaptada à sua preferência.',
  },
];

function Screenshots() {
  const moverGaleria = (direcao: number) => {
    const galeria = document.getElementById('screenshots-gallery');

    if (galeria) {
      galeria.scrollBy({
        left: direcao * 330,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="screenshots section-padding" id="telas">
      <div className="container">
        <div className="screenshots-heading">
          <div>
            <span className="section-label">
              <Smartphone size={17} />
              Conheça o aplicativo
            </span>

            <h2 className="section-title">
              Simples de usar.
              <br />
              Fácil de entender.
            </h2>

            <p className="section-description">
              Uma experiência pensada para deixar suas finanças
              organizadas sem complicação.
            </p>
          </div>

          <div className="screenshots-controls">
            <button
              type="button"
              className="screenshots-control"
              onClick={() => moverGaleria(-1)}
              aria-label="Ver telas anteriores"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              className="screenshots-control"
              onClick={() => moverGaleria(1)}
              aria-label="Ver próximas telas"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="screenshots-gallery" id="screenshots-gallery">
          {telas.map((tela, index) => (
            <article className="screenshot-card" key={tela.imagem}>
              <div className="screenshot-phone">
                <div className="screenshot-phone-camera" />

                <img
                  src={`${import.meta.env.BASE_URL}images/${tela.imagem}`}
                  alt={`Tela ${tela.titulo} do aplicativo PlanWin`}
                  loading={index > 1 ? 'lazy' : 'eager'}
                />
              </div>

              <div className="screenshot-info">
                <span className="screenshot-index">
                  TELA {String(index + 1).padStart(2, '0')}
                </span>

                <h3>{tela.titulo}</h3>

                <p>{tela.descricao}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="screenshots-hint">
          <span />
          Deslize para conhecer todas as telas
          <span />
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
