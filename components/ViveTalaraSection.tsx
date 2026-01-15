
import React from 'react';

const ViveTalaraSection: React.FC = () => {
  return (
    <section id="ecosistema" className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Mobile Mockup - Ajustado para responsividad */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1 flex justify-center">
            <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-md">
              <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] p-2 md:p-4 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-[6px] md:border-[10px] border-slate-800">
                 <div className="bg-white rounded-[2rem] h-[450px] sm:h-[500px] md:h-[650px] overflow-hidden relative flex flex-col items-center justify-center px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 animate-fade-up">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-blue-50 rounded-full blur-2xl opacity-40"></div>
                        <img 
                          src="https://i.postimg.cc/tCQYWhqC/logo-(2).png" 
                          alt="Logo Vive Talara App"
                          className="relative w-full h-full object-contain drop-shadow-xl"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] md:text-xs font-bold text-slate-400 tracking-[0.3em] uppercase">
                          App Oficial Certificada
                        </p>
                      </div>
                      <div className="w-32 sm:w-40 md:w-56 space-y-3 pt-4 md:pt-6">
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#f7941d] to-[#fdb913] w-[90%]"></div>
                        </div>
                        <p className="text-[7px] md:text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                          Validación Institucional
                        </p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1da1d1]/10 text-[#1da1d1] rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#1da1d1]/20 mx-auto lg:mx-0">
              Alianza Estratégica
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Vive Talara: <br/> <span className="text-[#1da1d1] font-serif italic">Nuestra Cara</span> al Turista
            </h2>
            <p className="text-slate-600 text-sm md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Desde el Patronato Turístico, impulsamos <strong>Vive Talara</strong> como la herramienta oficial para digitalizar nuestra provincia. Mientras nosotros cuidamos el fondo, la app gestiona la forma y la experiencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm text-center lg:text-left">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Validación Real</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-normal">Información histórica curada por nuestros expertos en cada punto de interés.</p>
              </div>
              <div className="p-5 md:p-6 bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm text-center lg:text-left">
                <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Impacto Sostenible</h4>
                <p className="text-[11px] md:text-xs text-slate-500 leading-normal">Usamos data en tiempo real para priorizar áreas de reforestación y cuidado.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <a 
                href="https://vivetalara.com" 
                target="_blank" 
                className="px-8 py-4 bg-amber-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 text-base md:text-lg shadow-lg shadow-amber-500/20"
              >
                IR A LA WEB APP
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ViveTalaraSection;
