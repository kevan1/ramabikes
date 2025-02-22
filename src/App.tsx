import React from 'react';
import {
  Menu,
  ShoppingCart,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f7] flex flex-col">
      {/* Navigation */}
      <nav className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="src/logo.jpg" alt="RamaBikes Logo" className="h-12 w-12" />
          <span className="text-2xl font-bold italic">RamaBikes</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Productos
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Servicios
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-black transition-colors"
          >
            Contacto
          </a>
          <button className="bg-black text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <ShoppingCart size={20} />
            <span>Shop</span>
          </button>
        </div>
        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 flex-grow">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold italic leading-tight">
              Descubra el mejor mecánico de bicicletas
            </h1>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Herramientas de calidad profesional y servicio experto para
              ciclistas que exigen la perfección. Nos apasiona mantener su
              bicicleta en perfectas condiciones.
            </p>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors transform hover:scale-105 transition-transform duration-200">
              Comprar ahora
            </button>
          </div>

          {/* Right Column */}
          <div className="relative aspect-square">
            <img
              src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&q=80"
              alt="Cyclist in motion"
              className="rounded-2xl object-cover w-full h-full shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="src/logo.jpg"
                  alt="RamaBikes Logo"
                  className="h-10 w-10 brightness-100"
                />
                <span className="text-xl font-bold italic">RamaBikes</span>
              </div>
              <p className="text-gray-400">
                Tu destino confiable para todo lo relacionado con bicicletas
                desde 2024.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">+54 9 ‭1123436170‬</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">info@ramabikes.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-gray-400">Recoleta, CABA</span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RamaBikes. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
