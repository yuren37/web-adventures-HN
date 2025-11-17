'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50492195392', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/web.aventureshn?igsh=azVqcGJwNmxvMXFp', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/1CwGGaTLHG/', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:einermarquez376@gmail.com';
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-[#0d1117] border-t border-gray-800/50 py-12 w-full">
      <div className="w-full px-6">
        
        {/* Contenido principal - OCUPANDO TODO EL ANCHO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-8 mb-8 w-full"
        >
          {/* Logo/Imagen - CENTRADO EN TODO EL ANCHO */}
          <div className="w-full flex flex-col items-center">
            <div className="relative w-48 h-16 mb-2">
              <Image
                src="/wa-foot.png"
                alt="Web Adventures"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm">Soluciones digitales modernas</p>
          </div>

          {/* Contactos - DISTRIBUIDOS HORIZONTALMENTE EN TODO EL ANCHO */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
            {/* Email */}
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-sm">einermarquez376@gmail.com</span>
            </motion.button>

            {/* WhatsApp */}
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm">Contactanos</span>
            </motion.button>
          </div>

          {/* Redes Sociales - CENTRADAS EN TODO EL ANCHO */}
          <div className="flex justify-center gap-4 w-full">
            <motion.button
              onClick={handleInstagramClick}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Instagram className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={handleFacebookClick}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Línea divisoria - QUE OCUPE TODO EL ANCHO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700/50 to-transparent mb-6"></div>

        {/* Copyright - CENTRADO EN TODO EL ANCHO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Web Adventures HN. Todos los derechos reservados.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}