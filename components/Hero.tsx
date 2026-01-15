
import React from 'react';
import { PageId } from '../App';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen w-full flex items-center bg-slate-950 overflow-hidden">
      {/* Background Image with Branding Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/xjFwfMyr/622500035.jpg" 
          className="w-full h-full object-cover opacity-50 scale-100 transition-transform duration-1000"
          alt="Talara Paisaje Oficial"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        
        {/* Decorative Glows */}
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#1da1d1]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#47a44b]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* CONTENEDOR CON PADDING INFERIOR INCREMENTADO PARA RESPIRACIÓN */}
      <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-40 pb-24 md:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 md:mb-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#47a44b] animate-pulse"></span>
            <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">Entidad Guardiana del Patrimonio</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-10 tracking-tight leading-[1.1]">
            La Memoria que <br/> <span className="italic font-serif text-[#1da1d1]">Construye Futuro.</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 max-w-xl mb-12 md:mb-16 font-light leading-relaxed">
            El Patronato Turístico es el ente rector de la identidad talareña. Certificamos la excelencia, custodiamos el ecosistema y validamos la experiencia digital que disfrutas en Vive Talara.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-10 md:gap-14 mt-16 md:mt-20">
            <div className="flex flex-col items-start w-full sm:w-auto">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-3 ml-1">Portal Oficial</span>
              <button 
                onClick={() => onNavigate('nosotros')}
                className="w-full sm:w-auto px-14 py-5 bg-[#47a44b] hover:bg-[#3d8b41] text-white rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-[#47a44b]/30 active:scale-95 border border-white/10"
              >
                Portal Institucional
              </button>
            </div>
            
            <div className="flex flex-col items-start group w-full sm:w-auto">
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-3 ml-1">Tecnología Aliada</span>
              <a 
                href="https://vivetalara.com" 
                target="_blank" 
                className="w-full sm:w-auto px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-4 group-hover:border-white/30"
              >
                Acceder a Vive Talara
                <svg className="w-5 h-5 text-[#1da1d1] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Badge */}
      <div className="absolute bottom-16 right-16 hidden xl:block text-right">
        <div className="p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem]">
           <p className="text-[#69c9f2] text-[10px] font-bold uppercase tracking-[0.5em] mb-3">Estatus de Conservación</p>
           <h4 className="text-white font-bold text-2xl italic font-serif">"Talara Sostenible 2030"</h4>
           <div className="flex items-center justify-end gap-3 mt-4">
             <span className="text-[11px] text-slate-400 font-medium">Validado por el Patronato</span>
             <div className="w-2 h-2 rounded-full bg-[#47a44b]"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
