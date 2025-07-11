import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Consulta disponibilidad y condiciones hoy mismo
        </h2>
        <p className="mb-6 text-lg">
          Un asesor especializado te brindará toda la información que necesites para tomar la mejor decisión.
        </p>
        {/* Botón principal WhatsAp, agregar enlace de la web: https://venta-terreno.vercel.app/*/}
        <a
          href="https://wa.me/51922501509?text=Hola,%20me%20interesa%20este%20terreno%20en%20Barranca.%20https%3A%2F%2Fventa-terreno.vercel.app%2F"          
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-semibold"
          rel="noopener noreferrer"

        >
          <FaWhatsapp className="text-2xl" />
          Contáctanos por WhatsApp
        </a>
        {/* Enlace secundario al formulario */}
        <div className="mt-4 text-base">
          O si prefieres,{" "}
          <a
            href="#contacto"
            className="underline hover:text-gray-200"
          >
            completa nuestro formulario
          </a>
        </div>
      </div>
    </section>
  );
}
