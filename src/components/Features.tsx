
import {
  Wallet,
  TrendingUp,
  ChartNoAxesCombined,
  CalendarDays,
  Moon,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

const recursos = [
  {
    icon: Wallet,
    numero: '01',
    titulo: 'Gerencie suas contas',
    descricao:
      'Cadastre suas contas, organize despesas e acompanhe seus compromissos financeiros em um só lugar.',
  },
  {
    icon: TrendingUp,
    numero: '02',
    titulo: 'Controle suas rendas',
    descricao:
      'Registre seus ganhos e acompanhe sua evolução financeira ao longo dos meses.',
  },
  {
    icon: ChartNoAxesCombined,
    numero: '03',
    titulo: 'Relatórios completos',
    descricao:
      'Visualize gráficos e indicadores para entender melhor como você utiliza seu dinheiro.',
  },
  {
    icon: CalendarDays,
    numero: '04',
    titulo: 'Resumo mensal',
    descricao:
      'Tenha uma visão clara do total de rendas, despesas e saldo final de cada período.',
  },
  {
    icon: Moon,
    numero: '05',
    titulo: 'Tema claro e escuro',
    descricao:
      'Escolha a aparência que combina com você e tenha uma experiência confortável.',
  },
  {
    icon: ShieldCheck,
    numero: '06',
    titulo: 'Seus dados no dispositivo',
    descricao:
      'O PlanWin utiliza armazenamento local para manter suas informações financeiras no próprio aparelho.',
  },
];

function Features() {
  return (
    <section className="features section-padding" id="recursos">
      <div className="container">
        <div className="features-heading">
          <span className="section-label">
            <span className="features-label-dot" />
            Recursos do PlanWin
          </span>

          <h2 className="section-title">
            Tudo o que você precisa
            <br />
            para cuidar do seu dinheiro.
          </h2>

          <p className="section-description">
            Ferramentas simples e práticas para transformar
            sua organização financeira em um hábito.
          </p>
        </div>

        <div className="features-grid">
          {recursos.map((recurso) => {
            const Icon = recurso.icon;

            return (
              <article
                className="feature-card"
                key={recurso.numero}
              >
                <div className="feature-card-top">
                  <div className="feature-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="feature-number">
                    {recurso.numero}
                  </span>
                </div>

                <h3>{recurso.titulo}</h3>

                <p>{recurso.descricao}</p>

                <div className="feature-card-arrow">
                  <ArrowUpRight size={19} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
