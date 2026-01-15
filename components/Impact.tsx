
import React from 'react';
import { ImpactStats } from '../types';

const stats: ImpactStats[] = [
  { 
    label: 'Hectáreas', 
    value: '500+', 
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v13m0 0l-4-4m4 4l4-4M5 21h14" />
      </svg>
    ) 
  },
  { 
    label: 'Reforestación', 
    value: '10k+', 
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ) 
  },
  { 
    label: 'Visitas Digitales', 
    value: '25k', 
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ) 
  },
  { 
    label: 'Eventos', 
    value: '150+', 
    icon: (
      <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ) 
  },
];

const Impact: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-40 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-950 mb-10 leading-[1.2]">
              Impacto Real en el <span className="text-emerald-700 italic font-serif">Corazón</span> de Talara
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-16 max-w-lg">
              Desde la protección activa del Algarrobo hasta la transformación digital con <strong>Vive Talara</strong>, el Patronato lidera el cambio hacia un destino sostenible, seguro y conectado.
            </p>
            <div className="grid grid-cols-2 gap-8 md:gap-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-stone-100 hover:border-emerald-200 transition-all hover:shadow-xl hover:-translate-y-2">
                  <div className="mb-6">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full mt-16 lg:mt-0">
             <div className="rounded-[4rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] relative group">
                <img src="https://i.postimg.cc/1zKPbqw8/DJI-0732-(2).jpg" alt="Conservación Talara" className="w-full h-[450px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 p-10 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] border border-white/20">
                   <p className="text-white font-medium italic text-xl md:text-2xl leading-relaxed">
                     "Estamos digitalizando la experiencia para que el patrimonio nunca se pierda."
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
