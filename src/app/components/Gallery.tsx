"use client";
import Image from "next/image";

export default function Gallery() {
  const images = [
    "/galeria1.png",
    "/galeria2.png",
    "/galeria3.jpg",
    "/galeria4.jpg",
    "/galeria5.png",
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">
        Galería del Terreno
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Imágenes */}
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={src}
              alt={`Imagen del terreno ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow"
            />
          </div>
        ))}
        {/* Video */}
        <div className="relative w-full h-64">
          <video
            src="/video-terreno.mp4"
            controls
            className="w-full h-full object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
