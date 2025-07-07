"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900 text-white">
      <Image
        src="/hero-terreno.png"
        alt="Vista aérea del terreno"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Tu oportunidad de inversión en Barranca
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Terreno habilitado con documentación completa y excelente ubicación
        </p>
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold"
          >
            Solicitar Información
          </a>
          <a
            href="#mapa"
            className="bg-transparent border border-white px-6 py-3 rounded font-semibold"
          >
            Ver Ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
