'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Portafolio', href: '#portafolio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  return (
    <>
      {/* Navbar fija - Botón a la izquierda CON "Menu" */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-start">
            {/* Botón hamburguesa CON TEXTO "Menu" - SIEMPRE 3 BARRITAS */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 p-3 text-white hover:bg-white/10 transition-colors"
            >
              <Menu className="w-7 h-7" />
              <span className="text-lg font-medium">Menu</span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Menú desplegable - Rectángulo ARRIBA */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Rectángulo azul - POSICIONADO ARRIBA */}
            <motion.div
              initial={{ opacity: 0, y: -300, scaleY: 0.8 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -300, scaleY: 0.8 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className="fixed top-20 left-0 w-80 z-40 bg-[#3A7CA5] py-8"
              style={{ height: 'auto', minHeight: '350px' }}
            />
            
            {/* Contenido del menú - POSICIONADO ARRIBA */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ 
                delay: 0.1,
                duration: 0.4
              }}
              className="fixed top-20 left-0 w-80 z-50 flex items-center pl-12 py-8"
            >
              <div className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.2 + (index * 0.1),
                      duration: 0.5
                    }}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`text-2xl font-bold transition-all duration-500 ${
                        hoveredItem === item.name 
                          ? 'text-white' 
                          : 'text-black'
                      }`}
                    >
                      {item.name}
                    </button>
                    
                    {/* Barra blanca que se extiende */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: hoveredItem === item.name ? '100%' : '0%',
                        opacity: hoveredItem === item.name ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 h-1 bg-white"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Overlay para cerrar al hacer click fuera */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/40"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}