import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">
        En nuestra aplicación, la privacidad de los usuarios es muy importante.
        Por eso, queremos informarte que no recopilamos, almacenamos ni
        compartimos ningún tipo de información personal.
      </p>
      <h2 className="text-xl font-semibold mb-2">
        Información que recopilamos
      </h2>
      <p className="mb-4">
        No recopilamos ninguna información personal identificable de los
        usuarios. La aplicación funciona sin necesidad de ingresar datos como
        nombre, correo electrónico o ubicación.
      </p>
      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        Esta aplicación no utiliza cookies propias. Sin embargo, al utilizar
        servicios de terceros como Google AdSense, es posible que se usen
        cookies para mostrar anuncios personalizados.
      </p>
      <h2 className="text-xl font-semibold mb-2">Publicidad</h2>
      <p className="mb-4">
        Podemos mostrar anuncios a través de Google AdSense. Google puede
        utilizar cookies para mostrar anuncios basados en tus visitas anteriores
        a esta y otras páginas web. Puedes obtener más información sobre cómo
        Google utiliza los datos en:
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          https://policies.google.com/technologies/ads
        </a>
      </p>
      <h2 className="text-xl font-semibold mb-2">Cambios</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta política en cualquier
        momento. Cualquier cambio será publicado en esta página.
      </p>
      <p>
        Si tienes preguntas sobre esta política, puedes contactarnos en la
        sección de{" "}
        <a href="/contacto" className="text-blue-600 underline">
          Contacto
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
