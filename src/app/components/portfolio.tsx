'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, MessageCircle } from 'lucide-react';
import Image from 'next/image';

const proyectos = [
  {
    id: 1,
    titulo: "Colegio Pompilio Ortega",
    descripcion: "Sitio web institucional con diseño moderno y responsive.",
    imagen: "/1.png",
    tecnologias: ["Next.js", "TypeScript", "Tailwind"],
    enlaceDemo: "https://colegio-pompilio-ortega-6y71.vercel.app/",
    enlaceCodigo: "https://github.com/yuren37/colegio-pompilio-ortega.git",
    categoria: "Web Institucional"
  },
  {
    id: 2,
    titulo: "Web Adventures HN",
    descripcion: "Plataforma corporativa de servicios tecnológicos.",
    imagen: "/2.png",
    tecnologias: ["React", "Tailwind", "Componentes"],
    enlaceDemo: "#",
    enlaceCodigo: "#",
    categoria: "Sitio Corporativo"
  },
  {
    id: 3,
    titulo: "Sistema de Registro",
    descripcion: "Plataforma en construcción con base de datos integrada.",
    imagen: "/3.png",
    tecnologias: ["Base de Datos", "Sistema CRUD", "Backend"],
    enlaceDemo: "#",
    enlaceCodigo: "#",
    categoria: "En Construcción"
  }
];

export default function Portafolio() {
  const handleContactClick = () => {
    window.open('https://wa.me/50492195392', '_blank');
  };

  return (
    <section id="portafolio" className="py-24 bg-gradient-to-br from-gray-900 to-[#0d1117] relative overflow-hidden">
      
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Portafolio <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-8 rounded-full"></div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Implementaciones técnicas con tecnología moderna y escalable.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-auto"
          >
            {proyectos.map((proyecto, index) => (
              <motion.div
                key={proyecto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden group transition-all duration-300 relative min-h-[420px] w-80 flex flex-col hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-800/80 backdrop-blur-sm text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-700/50">
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col items-center text-center flex-1 justify-between p-6">
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {proyecto.titulo}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors flex-1">
                    {proyecto.descripcion}
                  </p>

                  {/* Tecnologías */}
                  <div className="space-y-2 mb-6 w-full">
                    {proyecto.tecnologias.map((tech, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center justify-center gap-2 text-gray-300 group-hover:text-gray-200 transition-colors w-full"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex-shrink-0"></div>
                        <span className="font-medium text-xs">{tech}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-2 w-full">
                    <motion.a
                      href={proyecto.enlaceDemo}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </motion.a>
                    
                    <motion.a
                      href={proyecto.enlaceCodigo}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 text-gray-200 font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-300 border border-gray-600/50 text-sm"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Repo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      {/* Botón Contactar */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  viewport={{ once: true }}
  className="text-center"
>
  <motion.button
    onClick={handleContactClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gradient-to-r from-green-500 to-emerald-400 hover:from-green-600 hover:to-emerald-500 
      text-white font-bold text-lg py-4 px-12 rounded-2xl 
      flex items-center gap-3 justify-center mx-auto
      transition-all duration-300 shadow-2xl shadow-green-500/25 hover:shadow-green-500/40"
  >
    <MessageCircle className="w-6 h-6" />
    Contactanos
  </motion.button>
</motion.div>

      </div>
    </section>
  );
}