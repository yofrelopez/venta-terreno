// Paso 1: Estructura del componente principal con Next.js 15 (App Router)
// Archivo sugerido: src/app/components/MemoriaDescriptiva.tsx

import Image from "next/image";
import plano1 from './../../../public/plano1.png'; // Asegúrate de que las imágenes estén en la carpeta public
import plano2 from './../../../public/plano2.png'; // Ajusta la ruta según tu estructura de carpetas
import plano3 from './../../../public/plano3.png'; // Asegúrate de que las imágenes estén en la carpeta public



export default function MemoriaDescriptiva() {
  return (
    <section className=" mx-auto px-4 py-12 bg-blue-600">
        <div className="max-w-6xl mx-auto">
      

      <h3 className="text-2xl font-bold text-center text-amber-50 mb-4">Planos del Terreno</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[plano1, plano2, plano3].map((img, i) => (
          <div key={i} className="relative w-full bg-white aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src={img}
              alt={`Plano ${i + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
