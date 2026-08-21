import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import ContactActions from './components/ContactActions';
import Manual from './components/Manual'; // Importar el componente
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppBtn';
import { WHATSAPP_PHONE } from './config/links';

function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Process />
        <ContactActions />
        <Manual /> {/* Agregar al final del main */}
      </main>

      <Footer />
      <WhatsAppButton phoneNumber={WHATSAPP_PHONE} />
    </div>
  );
}

export default App;