
import React from 'react';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import ViveTalaraSection from '../components/ViveTalaraSection';
import Activities from '../components/Activities';
import Gastronomy from '../components/Gastronomy';

const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <Impact />
      <ViveTalaraSection />
      <Activities />
      <Gastronomy />
      
      {/* Sección: Talara Futuro - Rediseñada para máximo contraste e impacto */}
      <section className="py-32 md:py-48 bg-slate-950 text-white relative overflow-hidden">
        {/* Capas de diseño decorativas */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#1da1d1 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1da1d1]/20 rounded-full blur-[120px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#47a44b]/20 rounded-full blur-[120px] translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 leading-[1.05] tracking-tighter">
              Talara es hoy el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1da1d1] to-[#47a44b] italic font-serif">
                futuro del norte.
              </span>
            </h2>
            
            <p className="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Esta plataforma es una visión de lo que podemos lograr juntos. El <span className="text-white font-bold">Patronato Turístico</span> y <span className="text-[#1da1d1] font-bold">Vive Talara</span>: la alianza que define una Smart City.
            </p>

            <div className="inline-flex flex-col items-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-slate-500 mb-6 font-black">
                Un aporte estratégico de innovación
              </p>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1da1d1] to-[#47a44b] rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-4 bg-slate-900 px-8 py-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-default">
                  <span className="text-2xl md:text-3xl font-bold tracking-tighter italic text-white">
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
