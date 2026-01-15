
import React from 'react';

const ViveTalaraSection: React.FC = () => {
  return (
    <section id="ecosistema" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Mobile Mockup - Vive Talara como la Herramienta */}
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative z-10 w-full max-w-[300px] md:max-w-md mx-auto">
              <div className="bg-slate-900 rounded-[3rem] p-3 md:p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-[10px] border-slate-800">
                 <div className="bg-white rounded-[2rem] h-[550px] md:h-[650px] overflow-hidden relative flex flex-col items-center justify-center px-6">
                    <div className="flex flex-col items-center text-center space-y-6 animate-fade-up">
                      <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-blue-50 rounded-full blur-2xl opacity-40"></div>
                        <img 
                          src="https://i.postimg.cc/tCQYWhqC/logo-(2).png" 
                          alt="Logo Vive Talara App"
                          className="relative w-full h-full object-contain drop-shadow-2xl"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] md:text-xs font-bold text-slate-400 tracking-[0.4em] uppercase">
                          App Oficial Certificada
                        </p>
                      </div>
                      <div className="w-48 md:w-56 space-y-3 pt-6">
                        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#f7941d] to-[#fdb913] w-[90%]"></div>
                        </div>
                        <p className="text-[8px] md:text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                          Respaldo Institucional: Patronato
                        </p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Text Content: Explicando la Sinergia */}
          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1da1d1]/10 text-[#1da1d1] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#1da1d1]/20 mx-auto lg:mx-0">
              Alianza Estratégica
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 tracking-tight leading-tight">
              Vive Talara: <br/> <span className="text-[#1da1d1] font-serif italic">Nuestra Cara</span> al Turista
            </h2>
            <p className="text-slate-600 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
              Desde el Patronato Turístico, impulsamos <strong>Vive Talara</strong> como la herramienta oficial para digitalizar nuestra provincia. Mientras nosotros cuidamos el fondo, la app gestiona la forma y la experiencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#1da1d1]/30 transition-all text-center lg:text-left">
                <h4 className="font-bold text-slate-900 mb-2">Validación Real</h4>
                <p className="text-xs text-slate-500">Cada monumento y playa en la app cuenta con información histórica curada por nuestros expertos.</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:border-[#47a44b]/30 transition-all text-center lg:text-left">
                <h4 className="font-bold text-slate-900 mb-2">Impacto Sostenible</h4>
                <p className="text-xs text-slate-500">Usamos la data de la app para identificar áreas que necesitan reforestación o protección prioritaria.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://vivetalara.com" 
                target="_blank" 
                className="px-10 py-5 bg-amber-500 text-white rounded-2xl font-bold flex items-center justify-center gap-4 transition-all hover:scale-105 active:scale-95 text-lg shadow-xl shadow-amber-500/20"
              >
                IR A LA WEB APP
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ViveTalaraSection;
