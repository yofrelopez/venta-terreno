import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Columna 1: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo-blanco.png"
            alt="BCA Publicidad"
            width={180}
            height={60}
            className="mb-3"
          />
          <p className="text-sm text-center md:text-left">
            Especialistas en Marketing Inmobiliario Digital.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">Contacto</h3>
          <p className="text-sm">Lima, Perú</p>
          <p className="text-sm">Tel: +51 922 501 509</p>
          <p className="text-sm">Email: idev.pe@gmail.com</p>
        </div>

        {/* Columna 3: Redes */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold text-white mb-2">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/bca.publi" aria-label="Facebook" className="hover:text-white">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/bca.publi" aria-label="Instagram" className="hover:text-white">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 1.803.248 2.227.415a4.602 4.602 0 011.675 1.09 4.602 4.602 0 011.09 1.675c.167.424.359 1.021.415 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.248 1.803-.415 2.227a4.602 4.602 0 01-1.09 1.675 4.602 4.602 0 01-1.675 1.09c-.424.167-1.021.359-2.227.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.803-.248-2.227-.415a4.602 4.602 0 01-1.675-1.09 4.602 4.602 0 01-1.09-1.675c-.167-.424-.359-1.021-.415-2.227C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.248-1.803.415-2.227a4.602 4.602 0 011.09-1.675 4.602 4.602 0 011.675-1.09c.424-.167 1.021-.359 2.227-.415C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.17 0-3.548.012-4.796.069-1.042.05-1.606.218-1.982.363-.5.194-.857.427-1.232.802-.375.375-.608.732-.802 1.232-.145.376-.313.94-.363 1.982-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.05 1.042.218 1.606.363 1.982.194.5.427.857.802 1.232.375.375.732.608 1.232.802.376.145.94.313 1.982.363 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.042-.05 1.606-.218 1.982-.363.5-.194.857-.427 1.232-.802.375-.375.608-.732.802-1.232.145-.376.313-.94.363-1.982.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.05-1.042-.218-1.606-.363-1.982a3.07 3.07 0 00-.802-1.232 3.07 3.07 0 00-1.232-.802c-.376-.145-.94-.313-1.982-.363-1.248-.057-1.626-.069-4.796-.069zm0 4.838a5.003 5.003 0 110 10.005 5.003 5.003 0 010-10.005zm0 1.838a3.165 3.165 0 100 6.33 3.165 3.165 0 000-6.33zm6.406-1.845a1.17 1.17 0 11-2.34 0 1.17 1.17 0 012.34 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} BCA Publicidad. Todos los derechos reservados.
      </div>
    </footer>
  );
}
