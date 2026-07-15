import React from 'react';

// Mensaje codificado que generamos antes
const DEFAULT_MESSAGE = "Hola, me gustaría obtener asesoramiento para potenciar mi propiedad y conocer las opciones disponibles. ¡Muchas gracias!";

export default function WhatsAppButton({ phoneNumber = "56983076392", label = "Asesorarme por WhatsApp" }) {
  // Codificamos el mensaje para que sea una URL segura
  const encodedMessage = encodeURIComponent(DEFAULT_MESSAGE);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="btn btn--whatsapp btn--lg"
    >
      {/* Icono SVG de WhatsApp */}
      <svg 
        className="btn__icon-wa" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        aria-hidden="true"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.938 9.938 0 0 0 4.808 1.233h.005c5.505 0 9.99-4.478 9.99-9.984A9.99 9.99 0 0 0 12.012 2zm4.7 13.987c-.258.723-1.288 1.32-1.782 1.4-1.268.207-2.61-.318-4.24-1.12-2.185-1.074-3.595-3.3-3.705-3.447-.11-.148-.9-1.196-.9-2.28 0-1.085.567-1.616.768-1.834.203-.217.447-.272.595-.272.148 0 .296.002.425.008.135.006.317-.05.497.39.186.45.637 1.55.692 1.664.056.115.093.248.016.397-.074.15-.112.24-.22.373-.11.13-.23.293-.33.394-.11.103-.224.215-.096.435.127.22.565.933 1.21 1.505.83.74 1.53.968 1.748 1.078.217.11.347.09.475-.054.127-.145.547-.638.693-.855.148-.217.296-.18.497-.107.2.073 1.272.6 1.49.708.215.11.36.165.41.253.053.09.053.518-.205 1.24z"/>
      </svg>
      {label}
    </a>
  );
}