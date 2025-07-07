"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [formSent, setFormSent] = useState(false);

  // Al cargar, revisa si el usuario ya envió el formulario
  useEffect(() => {
    const sent = localStorage.getItem("formSent");
    if (sent === "true") {
      setFormSent(true);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnvylzq", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        toast.success("✅ ¡Gracias! Tu mensaje se ha enviado correctamente.");
        localStorage.setItem("formSent", "true");
        setFormSent(true);
      } else {
        toast.error("❌ Ocurrió un error al enviar tu mensaje.");
      }
    } catch (error) {
        console.error(error);
      toast.error("❌ Ocurrió un error de red. Intenta nuevamente.");
        
    }
  }

  return (
    <section id="contacto" className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Contáctanos</h2>
      {formSent ? (
        <p className="text-center text-green-600 text-lg">
          Ya hemos recibido tu mensaje. ¡Gracias por contactarnos!
        </p>
      ) : (
        <>
          <p className="text-center text-gray-600 mb-8">
            Completa el formulario y un asesor se comunicará contigo en breve.
          </p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-sm font-medium mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="telefono" className="text-sm font-medium mb-1">
                Celular
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>


            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="text-sm font-medium mb-1">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label htmlFor="mensaje" className="text-sm font-medium mb-1">
                Mensaje (opcional)
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                defaultValue="Hola, me interesa recibir más información sobre el terreno. Gracias."
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
}
