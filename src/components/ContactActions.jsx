import { BOOKING_URL, FORM_URL } from '../config/links';
import MountainDivider from './MountainDivider';

function ContactActions() {
  return (
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
  );
}

export default ContactActions;
