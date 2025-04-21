import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setError(false);
      alert("¡Gracias por contactarnos!");
    } else {
      setError(true);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
        Contáctanos
      </h1>
      {submitted ? (
        <div className="text-green-600 mb-6 text-center">
          <h2 className="text-lg font-medium">
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-600 mb-4 text-center">
              <p>Por favor, completa todos los campos correctamente.</p>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tu correo
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Tu mensaje
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      )}

      <p className="mt-4 text-sm text-center text-gray-600">
        Si prefieres escribirnos directamente, también puedes hacerlo a nuestro
        correo oficial:{" "}
        <a
          href="mailto:pequetutoresrd@gmail.com"
          className="text-blue-600 underline"
        >
          pequetutoresrd@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
