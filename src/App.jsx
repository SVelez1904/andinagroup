import React from 'react';
import logo from './assets/logo.png';
import './App.css';
import WhatsAppButton from './WhatsAppBtn';

// ---------------------------------------------------------------
// Reemplaza estos dos links por los reales cuando los tengas listos.
// ---------------------------------------------------------------
const BOOKING_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3InGBO8Qg9bq7CLzd5cB7clP44b0SAT3vQSO1Z01sr6DoWQgIxy-hzzcNPO9YRHLpQzu1kC3zU';
const FORM_URL = 'https://forms.gle/XEZkJndrUcKw1d8c8';

function MountainDivider({ tone = 'gold' }) {
  return (
    <svg
      className={`ridge ridge--${tone}`}
      viewBox="0 0 1200 90"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline points="0,90 140,20 230,90" />
      <polyline points="180,90 340,10 480,90" />
      <polyline points="420,90 600,30 780,90" />
      <polyline points="720,90 900,12 1050,90" />
      <polyline points="980,90 1090,35 1200,90" />
    </svg>
  );
}

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <div className="wrap site-header__row">
          <a href="#top" className="brand">
            <img src={logo} alt="Andina Group" className="brand__mark" />
            <span className="brand__name">Andina Group</span>
          </a>
          <nav className="site-nav">
            <a href="#proceso">Cómo funciona</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn--small btn--primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Agendar cita
            </a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section id="top" className="hero">
          <div className="wrap hero__inner">
            <p className="eyebrow">Arriendo de propiedades · Región Metropolitana</p>
            <h1 className="hero__title">
              Tu propiedad, en manos que la conocen
            </h1>
            <p className="hero__lead">
              Andina Group acompaña a propietarios en todo el proceso de arriendo:
              coordinamos la visita, evaluamos la propiedad y buscamos al
              arrendatario correcto. Sin llamadas cruzadas ni citas duplicadas.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary btn--lg" href={BOOKING_URL} target="_blank" rel="noreferrer">
                Agendar una cita
              </a>
              <a className="btn btn--ghost btn--lg" href={FORM_URL} target="_blank" rel="noreferrer">
                Postular mi propiedad
              </a>
              {/* <WhatsAppButton phoneNumber="56983076392" label="Asesorarme por WhatsApp" /> */}
            </div>
          </div>
          <MountainDivider tone="gold" />
        </section>

        <section id="proceso" className="process">
          <div className="wrap">
            <h2 className="section-title">Tres pasos, un solo interlocutor</h2>
            <ol className="process__list">
              <li className="process__item">
                <span className="process__num">01</span>
                <h3>Agenda tu cita</h3>
                <p>
                  Eliges el horario que más te acomode desde un calendario en
                  línea. Cada cupo se bloquea al reservarse, así que nunca
                  chocan dos citas para el mismo horario.
                </p>
              </li>
              <li className="process__item">
                <span className="process__num">02</span>
                <h3>Evaluamos tu propiedad</h3>
                <p>
                  Visitamos la propiedad, revisamos su estado y condiciones,
                  y conversamos contigo sobre expectativas de arriendo.
                </p>
              </li>
              <li className="process__item">
                <span className="process__num">03</span>
                <h3>Publicamos y arrendamos</h3>
                <p>
                  Buscamos activamente al arrendatario adecuado y te
                  mantenemos informado durante todo el proceso.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section id="contacto" className="actions">
          <div className="wrap">
            <h2 className="section-title section-title--light">Empecemos</h2>
            <div className="actions__grid">
              <a className="action-card" href={BOOKING_URL} target="_blank" rel="noreferrer">
                <span className="action-card__label">Agendar cita</span>
                <h3>Reserva una visita</h3>
                <p>Agenda directamente en nuestro calendario disponible.</p>
                <span className="action-card__arrow" aria-hidden="true">→</span>
              </a>
              <a className="action-card" href={FORM_URL} target="_blank" rel="noreferrer">
                <span className="action-card__label">Formulario</span>
                <h3>Postula tu propiedad</h3>
                <p>Cuéntanos sobre tu propiedad y te contactamos.</p>
                <span className="action-card__arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <MountainDivider tone="paper" />
        </section>
      </main>

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
      <WhatsAppButton phoneNumber="56983076392" />
    </div>
  );
}

export default App;
