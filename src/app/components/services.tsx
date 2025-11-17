'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, TrendingUp, ChevronDown } from 'lucide-react';

const services = [
  "Desarrollo Web Profesional",
  "Soporte Técnico Especializado", 
  "Marketing Digital Estratégico",
  "Tecnología de Vanguardia"
];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentService = services[currentServiceIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText(currentService.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      } else {
        setDisplayText(currentService.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentService) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentServiceIndex, typingSpeed]);

  const scrollToServices = () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    {
      icon: Code2,
      title: "Desarrollo Web",
      description: "Sitios web profesionales creados con tecnologías modernas como React, TypeScript y Tailwind CSS",
      color: "from-blue-500 to-cyan-400",
      glow: "hover:shadow-blue-500/20",
      features: ["Código 100% personalizado", "Optimización SEO integrada", "Tecnologías modernas", "Diseño responsive"]
    },
    {
      icon: Cpu,
      title: "Soporte Técnico",
      description: "Reparación, mantenimiento y optimización integral de equipos y sistemas",
      color: "from-orange-400 to-yellow-400",
      glow: "hover:shadow-orange-500/20",
      features: ["Diagnóstico completo", "Reparación hardware", "Instalación software", "Soporte remoto"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estrategias de publicidad y posicionamiento para maximizar tu presencia online",
      color: "from-purple-500 to-pink-400",
      glow: "hover:shadow-purple-500/20",
      features: ["Campañas publicitarias", "Gestión redes sociales", "Analítica web", "Posicionamiento SEO"]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0d1117] to-black relative overflow-hidden flex items-center justify-center">
      
      {/* Efectos de fondo luminosos */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid sutil de fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            WEB
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> ADVENTURES</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>

          {/* Texto dinámico */}
          <div className="text-2xl md:text-3xl font-light text-white mb-4">
            Especialistas en{' '}
            <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        {/* Cards de servicios - CENTRADAS CORRECTAMENTE */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-auto"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 ${card.glow} hover:shadow-2xl transition-all duration-300 group relative min-h-[400px] w-80 flex flex-col`}
                >
                  {/* Efecto de borde luminoso */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                  {/* Contenido centrado verticalmente */}
                  <div className="flex flex-col items-center text-center flex-1 justify-between">
                    
                    {/* Icono superior */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 blur-md transition-all duration-300`}></div>
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {card.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors flex-1">
                      {card.description}
                    </p>

                    {/* Features CENTRADAS Y ALINEADAS PERFECTAMENTE */}
                    <div className="space-y-4 mb-8 w-full">
                      {card.features.map((feature, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center justify-center gap-3 text-gray-300 group-hover:text-gray-200 transition-colors w-full"
                        >
                          {/* PUNTO REDONDO perfectamente centrado */}
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${card.color} flex-shrink-0`}></div>
                          <span className="font-medium text-sm text-center">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Espacio reservado donde estaba el botón */}
                    <div className="h-12"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-3 cursor-pointer"
          onClick={scrollToServices}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
          <span className="text-sm text-white/60 font-medium uppercase tracking-wider hover:text-white transition-colors">
            Explorar Más
          </span>
        </motion.div>

      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

    </section>
  );
}