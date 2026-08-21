import { BOOKING_URL, FORM_URL } from '../config/links';
import MountainDivider from './MountainDivider';

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__inner">
        <p className="eyebrow">Arriendo de propiedades · Región Metropolitana</p>
        <h1 className="hero__title">Tu propiedad, en manos que la conocen</h1>
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
        </div>
      </div>
      <MountainDivider tone="gold" />
    </section>
  );
}

export default Hero;