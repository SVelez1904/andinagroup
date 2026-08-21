import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__row">
        <div className="brand brand--footer">
          <img src={logo} alt="Andina Group" className="brand__mark brand__mark--sm" />
          <span className="brand__name">Andina Group</span>
        </div>
        <div className="site-footer__meta">
          <p>Santiago, Chile</p>
          <p>leticia@andinagroup.cl</p>
        </div>
        <p className="site-footer__copy">
          &copy; {new Date().getFullYear()} Andina Group. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
