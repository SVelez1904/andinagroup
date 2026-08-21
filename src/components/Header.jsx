import logo from '../assets/logo.png';
import { BOOKING_URL } from '../config/links';

function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <a href="#top" className="brand">
          <img src={logo} alt="Andina Group" className="brand__mark" />
          <span className="brand__name">Andina Group</span>
        </a>
        <nav className="site-nav">
          <a href="#proceso">Cómo funciona</a>
          <a href="#manual">Normativas</a>
          <a href="#contacto">Contacto</a>
          <a className="btn btn--small btn--primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;