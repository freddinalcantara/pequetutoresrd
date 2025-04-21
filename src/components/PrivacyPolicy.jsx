import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">
        En **PequeTutoresRD**, valoramos la privacidad de nuestros usuarios y
        estamos comprometidos con la protección de sus datos. Esta Política de
        Privacidad describe qué información recopilamos, cómo la usamos y qué
        opciones tienen los usuarios al respecto.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        Información que recopilamos
      </h2>
      <p className="mb-4">
        Nuestra aplicación **no recopila información personal directamente**.
        Sin embargo, podemos recopilar cierta información no personal de manera
        automática a través de tecnologías de terceros, como:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Tipo de navegador y dispositivo</li>
        <li>Preferencias de idioma</li>
        <li>Datos de navegación anónimos</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Publicidad</h2>
      <p className="mb-4">
        Utilizamos **Google AdSense** como proveedor de anuncios en nuestra
        aplicación. Google puede utilizar cookies y tecnologías similares para
        mostrar anuncios relevantes.
      </p>
      <p className="mb-4">
        Dado que nuestra aplicación está dirigida a un público infantil, los
        anuncios que mostramos están **limitados a contenido apto para todas las
        edades**.
      </p>
      <p className="mb-4">
        Para obtener más información sobre cómo Google utiliza los datos cuando
        visitas nuestra app, puedes leer su política en:
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline ml-1"
        >
          https://policies.google.com/technologies/partner-sites
        </a>
      </p>

      <h2 className="text-xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        Esta aplicación no utiliza cookies propias. Sin embargo, al utilizar
        servicios de terceros como **Google AdSense**, es posible que se usen
        cookies para mostrar anuncios personalizados. Puedes configurar tu
        navegador para **bloquear o eliminar cookies**, aunque algunas funciones
        podrían no estar disponibles.
      </p>

      <h2 className="text-xl font-semibold mb-2">Privacidad infantil</h2>
      <p className="mb-4">
        Nos tomamos muy en serio la protección de los niños en línea. No
        recopilamos información personal de menores de edad de forma
        intencionada. Si eres padre, madre o tutor y crees que se ha recopilado
        información personal de un menor, por favor contáctanos para eliminarla.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cambios</h2>
      <p className="mb-4">
        Nos reservamos el derecho de actualizar esta política en cualquier
        momento. Cualquier cambio será publicado en esta página.
      </p>

      <p>
        Si tienes preguntas sobre esta política, puedes contactarnos a través de
        nuestra página de{" "}
        <a href="/contacto" className="text-blue-600 underline">
          Contacto
        </a>
        .
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Última actualización: 21 de abril de 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
