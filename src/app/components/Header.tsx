import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + Nombre */}
        <Link href="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/logo-blanco.png"
              alt="BCA Publicidad"
              width={150}
              height={150}
              priority
            />
          </div>
        </Link>

        {/* Enlace al formulario */}
        <Link
          href="#contacto"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
}
