const STEPS = [
  {
    num: '01',
    title: 'Agenda tu cita',
    text: 'Eliges el horario que más te acomode desde un calendario en línea. Cada cupo se bloquea al reservarse, así que nunca chocan dos citas para el mismo horario.',
  },
  {
    num: '02',
    title: 'Evaluamos tu propiedad',
    text: 'Visitamos la propiedad, revisamos su estado y condiciones, y conversamos contigo sobre expectativas de arriendo.',
  },
  {
    num: '03',
    title: 'Publicamos y arrendamos',
    text: 'Buscamos activamente al arrendatario adecuado y te mantenemos informado durante todo el proceso.',
  },
];

function Process() {
  return (
    <section id="proceso" className="process">
      <div className="wrap">
        <h2 className="section-title">Tres pasos, un solo interlocutor</h2>
        <ol className="process__list">
          {STEPS.map((step) => (
            <li className="process__item" key={step.num}>
              <span className="process__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
