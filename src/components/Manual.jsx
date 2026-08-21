export default function Manual() {
  return (
    <section className="manual-section" id="manual">
      <div className="wrap">
        <div className="manual-container">
          
          {/* ENCABEZADO PRINCIPAL */} 
          <header className="manual-header">
            <div className="manual-header__badges">
              <span className="badge badge--danger">Tolerancia Cero</span>
              <span className="badge badge--gold">Vigente y Obligatorio</span>
            </div>
            <h2 className="manual-header__title">Manual de Normativas y Cumplimiento Operativo</h2>
            <p className="manual-header__desc">
              Marco normativo estricto para la gestión de propiedades en Airbnb. Su objetivo es salvaguardar la privacidad y seguridad de los huéspedes, garantizando una operación transparente y evitando la suspensión o baneo definitivo de la cuenta.
            </p>
          </header>

          {/* FALTAS GRAVÍSIMAS */} 
          <div className="manual-block">
            <h3 className="manual-block__title manual-block__title--danger">
              <span className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
              </span> 
              Faltas Gravísimas (Baneo Inmediato)
            </h3>
            <p className="manual-block__sub">
              Conductas que conllevan la cancelación inmediata de la cuenta sin derecho a apelación:
            </p>
            
            <div className="manual-grid manual-grid--3">
              <article className="manual-card manual-card--alert">
                <span className="manual-card__tag">Prohibición Absoluta</span>
                <h4>Cámaras en Interiores</h4>
                <p>Estrictamente prohibido cualquier dispositivo de grabación en zonas internas (habitaciones, baños, cocina, pasillos) esté encendido o apagado. Solo se permiten timbres/cámaras exteriores declaradas previamente.</p>
              </article>

              <article className="manual-card manual-card--alert">
                <span className="manual-card__tag">Privacidad del Huésped</span>
                <h4>Ingreso No Autorizado</h4>
                <p>Propietarios o personal no pueden ingresar durante la estancia sin consentimiento explícito previo del huésped. Excepción única: emergencias graves de fuerza mayor (fugas, incendios).</p>
              </article>

              <article className="manual-card manual-card--alert">
                <span className="manual-card__tag">Inclusión y Respeto</span>
                <h4>Discriminación y Acoso</h4>
                <p>Cero tolerancia a rechazar reservas o dar trato diferenciado por raza, religión, género o discapacidad. Todo lenguaje agresivo o acoso provocará la baja inmediata y acciones legales.</p>
              </article>
            </div>
          </div>

          {/* FALTAS GRAVES */} 
          <div className="manual-block">
            <h3 className="manual-block__title manual-block__title--warning">
              <span className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </span> 
              Faltas Graves y Prácticas Prohibidas
            </h3>
            
            <div className="manual-grid manual-grid--2">
              <div className="manual-card">
                <h4>Riesgos de Suspensión</h4>
                <ul className="manual-list">
                  <li><strong>Pagos Fuera de Plataforma:</strong> Todo cobro fuera del sistema anula la cobertura AirCover y acarrea sanciones severas.</li>
                  <li><strong>Cebo y Cambio (Bait-and-Switch):</strong> Asignar un inmueble distinto o con condiciones inferiores a las anunciadas implica reembolso total y suspensión.</li>
                  <li><strong>Cancelaciones Injustificadas:</strong> Cancelar por conveniencia genera penalizaciones financieras, bloqueo de calendario y pérdida de Superhost.</li>
                </ul>
              </div>

              <div className="manual-card">
                <h4>Cobros no Permitidos</h4>
                <ul className="manual-list">
                  <li><strong>Depósitos en Efectivo:</strong> Prohibido; deben gestionarse mediante las herramientas de la plataforma.</li>
                  <li><strong>Tarifas Adicionales en Persona:</strong> Evasión contractual de tarifas (limpieza o huéspedes extra deben estar en la app).</li>
                  <li><strong>Descuentos Directos:</strong> La inclusión de teléfonos o enlaces en el chat detectada por algoritmo genera suspensión del anuncio.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CHECKLIST Y SANCIONES */} 
          <div className="manual-grid manual-grid--2">
            
            <div className="manual-card manual-card--highlight">
              <h3 className="manual-card__header-title">
                <span className="icon" style={{ display: 'inline-flex', marginRight: '8px', verticalAlign: 'middle' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  </svg>
                </span>
                Checklist Operativo (Antes del Check-in)
              </h3>
              <ul className="manual-list">
                <li><strong>Inspección de Privacidad:</strong> Revisar exhaustivamente la ausencia total de cámaras/micrófonos internos.</li>
                <li><strong>Detectores de Seguridad:</strong> Comprobar funcionamiento de detectores de humo y monóxido de carbono.</li>
                <li><strong>Canal Único:</strong> Registrar el 100% de la comunicación exclusivamente en el chat de Airbnb.</li>
                <li><strong>Gestión de Accesos:</strong> Modificar los códigos de cerraduras electrónicas entre cada estancia.</li>
              </ul>
            </div>

            <div className="manual-card">
              <h3 className="manual-card__header-title">
                <span className="icon" style={{ display: 'inline-flex', marginRight: '8px', verticalAlign: 'middle' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h18" />
                  </svg>
                </span>
                Procedimiento de Sanciones
              </h3>
              <ol className="manual-stepper">
                <li className="manual-stepper__item">
                  <span className="manual-stepper__num">1</span>
                  <div>
                    <strong>Reporte o Detección</strong>
                    <p>Reporte del huésped o detección automática por algoritmo.</p>
                  </div>
                </li>
                <li className="manual-stepper__item">
                  <span className="manual-stepper__num">2</span>
                  <div>
                    <strong>Ocultamiento e Investigación</strong>
                    <p>Ocultamiento preventivo del anuncio mientras la investigación está abierta.</p>
                  </div>
                </li>
                <li className="manual-stepper__item">
                  <span className="manual-stepper__num">3</span>
                  <div>
                    <strong>Dictamen Final</strong>
                    <p>Infracción menor (advertencia/multa), grave (reembolso/suspensión) o gravísima (baneo definitivo).</p>
                  </div>
                </li>
              </ol>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}