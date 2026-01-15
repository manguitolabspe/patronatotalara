
import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import ViveTalaraSection from '../components/ViveTalaraSection';
import Activities from '../components/Activities';
import Gastronomy from '../components/Gastronomy';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Impact />
      <ViveTalaraSection />
      <Activities />
      <Gastronomy />
      
      {/* Sección: Talara Futuro - Optimizada para Responsividad */}
      <section className="py-24 md:py-48 bg-slate-950 text-white relative overflow-hidden">
        {/* Capas de diseño decorativas con contención */}
        <div className="absolute inset-0 z-0 opacity-10 md:opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1da1d1 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 left-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[#1da1d1]/10 rounded-full blur-[80px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[#47a44b]/10 rounded-full blur-[80px] md:blur-[120px] translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-10 leading-[1.1] tracking-tighter break-words">
              Talara es hoy el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1da1d1] to-[#47a44b] italic font-serif">
                futuro del norte.
              </span>
            </h2>
            
            <p className="text-base md:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 md:mb-16 font-light leading-relaxed px-2">
              Esta plataforma es una visión de lo que podemos lograr juntos. El <span className="text-white font-bold">Patronato Turístico</span> y <span className="text-[#1da1d1] font-bold">Vive Talara</span>: la alianza que define una Smart City.
            </p>

            <div className="inline-flex flex-col items-center w-full px-4">
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-slate-500 mb-6 font-black text-center">
                Un aporte estratégico de innovación
              </p>
              
              <div className="group relative w-full max-w-xs md:max-w-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1da1d1] to-[#47a44b] rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative flex items-center justify-center gap-3 md:gap-4 bg-slate-900 px-6 md:px-8 py-4 md:py-5 rounded-2xl border border-white/5 transition-all">
                  <span className="text-xl md:text-3xl font-bold tracking-tighter italic text-white whitespace-nowrap">
                    manguito labs <span className="text-[#47a44b] animate-pulse">●</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decoración de borde inferior */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>
    </div>
  );
};

export default Home;
