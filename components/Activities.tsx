
import React, { useState } from 'react';
import { Activity } from '../types';
import Modal from './Modal';

const activities: Activity[] = [
  {
    id: '1',
    title: 'Aventura en ACA Balcones',
    description: 'Rutas de trekking diseñadas para conectar tus sentidos con la brisa del mar y los acantilados milenarios.',
    image: 'https://i.postimg.cc/Wb3BFb42/balconesweb.jpg',
    category: 'Ecología'
  },
  {
    id: '2',
    title: 'Legado de Algarrobo',
    description: 'Participa en jornadas de vida donde cada plantón es una promesa de futuro para nuestro ecosistema.',
    image: 'https://i.postimg.cc/zf18t12f/Gemini-Generated-Image-f8mv2gf8mv2gf8mv.png',
    category: 'Ecología'
  },
  {
    id: '3',
    title: 'Rutas Gastronómicas',
    description: 'Un viaje al paladar donde el plato "La Boda" es el protagonista indiscutible de nuestra herencia.',
    image: 'https://i.postimg.cc/kgkf9RJs/delicioso_ceviche_mariscos_peru_chiles_garbanzossss.jpg',
    category: 'Gastronomía'
  }
];

const Activities: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  return (
    <section id="proyectos" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-8 leading-tight">
              Nuestros <span className="text-emerald-700">Compromisos</span> Activos
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed">
              Transformamos la intención en acción tangible. Cada pilar del Patronato está diseñado para generar un impacto real en la biodiversidad y cultura de nuestra región.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4 overflow-hidden">
               {[1, 2, 3, 4].map(i => (
                 <img key={i} className="inline-block h-14 w-14 rounded-full ring-4 ring-white object-cover" src={`https://i.pravatar.cc/150?u=${i}`} alt="Voluntario" />
               ))}
               <div className="flex items-center justify-center h-14 w-14 rounded-full bg-emerald-100 ring-4 ring-white text-emerald-700 text-xs font-bold uppercase tracking-tighter">Activos</div>
            </div>
            <p className="text-[10px] text-stone-400 mt-3 font-bold uppercase tracking-widest">Respaldo Comunitario</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((act) => (
            <div key={act.id} className="group relative bg-white rounded-[3rem] border border-stone-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={act.image} 
                  alt={act.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-8 left-8">
                   <span className="px-5 py-2.5 bg-white/95 backdrop-blur text-emerald-800 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
                      {act.category}
                   </span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-stone-800 mb-5 group-hover:text-emerald-700 transition-colors">
                  {act.title}
                </h3>
                <p className="text-stone-600 mb-10 leading-relaxed text-base">
                  {act.description}
                </p>
                <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                   <button 
                    onClick={() => setSelectedActivity(act)}
                    className="text-stone-800 font-bold text-sm tracking-widest uppercase flex items-center gap-2 group/btn"
                   >
                      Ver Detalles
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedActivity} 
        onClose={() => setSelectedActivity(null)} 
        title={selectedActivity?.title || ""}
      >
        <div className="space-y-8">
          <img src={selectedActivity?.image} className="w-full h-64 object-cover rounded-3xl" alt={selectedActivity?.title} />
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p className="text-lg">{selectedActivity?.description}</p>
            <p>Este proyecto institucional forma parte del plan maestro "Talara Sostenible 2030". A través de esta iniciativa, buscamos no solo preservar el patrimonio, sino involucrar a la ciudadanía en procesos de cambio positivo.</p>
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
               <h5 className="font-bold text-emerald-900 mb-3 uppercase text-[10px] tracking-widest">Lo que incluye esta labor:</h5>
               <ul className="text-sm space-y-2 font-medium">
                  <li>• Guías certificados por el Patronato.</li>
                  <li>• Protocolos de seguridad y cuidado ambiental.</li>
                  <li>• Registro histórico y fotográfico del impacto.</li>
               </ul>
            </div>
          </div>
          <button onClick={() => setSelectedActivity(null)} className="w-full py-5 bg-[#0c4a6e] text-white rounded-2xl font-bold">ENTENDIDO</button>
        </div>
      </Modal>
    </section>
  );
};

export default Activities;
