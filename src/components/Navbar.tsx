
import { ArrowDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo">
          <img
            src={`${import.meta.env.BASE_URL}images/favicon.png`}
            alt="PlanWin"
          />
          <span>PlanWin</span>
        </a>

        <nav className={`navbar-links ${menuAberto ? 'ativo' : ''}`}>
          <a href="#inicio" onClick={() => setMenuAberto(false)}>
            Início
          </a>

          <a href="#recursos" onClick={() => setMenuAberto(false)}>
            Recursos
          </a>

          <a href="#telas" onClick={() => setMenuAberto(false)}>
            O aplicativo
          </a>

          <a href="#download" onClick={() => setMenuAberto(false)}>
            Download
          </a>
        </nav>

        <a href="#download" className="navbar-download">
          Baixar aplicativo
          <ArrowDown size={17} />
        </a>

        <button
          type="button"
          className="navbar-menu"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
