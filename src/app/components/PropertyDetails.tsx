// /src/app/components/PropertyDetails.tsx
import {
  FaRulerCombined,
  FaMapMarkedAlt,
  FaFileAlt,
  FaBolt,
  FaTags,
  FaDownload
} from "react-icons/fa";

const stats = [
  { icon: FaRulerCombined, label: "Área total", value: "10,153 m²" },
  { icon: FaMapMarkedAlt,  label: "Lotes habilitados", value: "55" },
  { icon: FaBolt,          label: "Servicios", value: "Luz • Agua • Desagüe" },
  { icon: FaFileAlt,       label: "Documentación", value: "Partida SUNARP vigente" }
];

export default function PropertyDetails() {
  return (
    <section className="py-14 px-4 max-w-6xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-10">Detalles del Terreno</h2>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-gray-50 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
            <Icon className="text-3xl text-blue-600 mb-3" />
            <p className="text-sm uppercase tracking-wide text-gray-500">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
          </div>
        ))}
      </div>

      {/* Precio y condiciones */}
      <div className="mt-10 bg-gray-50 rounded-lg p-8 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center space-x-4">
          <FaTags className="text-3xl text-blue-600" />
          <div>
            <h3 className="text-xl font-semibold">Precio</h3>
            <p className="mt-1 text-gray-600">
              Precio: <strong> USD $ 800,000.00 -  A tratar </strong>
            </p>
            <p className="text-gray-600">
              Valor real en tasación: USD $ 1.2 millones
            </p>
          </div>
        </div>

        <a
          href="/ficha-tecnica.pdf"
          target="_blank"
          className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold"
        >
          <FaDownload />
          Descargar Ficha Técnica
        </a>
      </div>
    </section>
  );
}
