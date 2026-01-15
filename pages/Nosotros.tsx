
import React from 'react';

const Nosotros: React.FC = () => {
  return (
    <div className="page-fade-in">
      {/* Header de Página con el Azul de Marca */}
      <section className="relative py-32 md:py-40 bg-[#0c4a6e] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img src="https://i.postimg.cc/1zKPbqw8/DJI-0732-(2).jpg" className="w-full h-full object-cover" alt="Nosotros" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">Autoridad Turística</h1>
          <p className="text-[#69c9f2] text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Nuestra labor trasciende la promoción; somos los arquitectos de la sostenibilidad y el orgullo de Talara.
          </p>
        </div>
      </section>

      {/* Bloque Institucional: El Sello de Calidad */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-sky-50 text-[#1da1d1] rounded-full text-xs font-bold uppercase tracking-widest border border-sky-100">
                Gobernanza y Visión
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Certificamos la <span className="italic font-serif text-[#47a44b]">Autenticidad Talareña</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                El Patronato Turístico de Talara opera como el ente certificador de la provincia. Validamos que los servicios turísticos, gastronómicos y ambientales cumplan con los más altos estándares de identidad y respeto por el entorno.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-sky-50/50 rounded-3xl border border-sky-100/50">
                  <div className="w-10 h-10 bg-[#1da1d1] text-white rounded-lg flex items-center justify-center mb-4 font-bold">A</div>
                  <h4 className="font-bold text-[#1da1d1] mb-2 text-xl">Autoridad</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Representamos los intereses culturales y naturales de Talara ante entidades nacionales e internacionales.
                  </p>
                </div>
                <div className="p-8 bg-green-50/50 rounded-3xl border border-green-100/50">
                  <div className="w-10 h-10 bg-[#47a44b] text-white rounded-lg flex items-center justify-center mb-4 font-bold">C</div>
                  <h4 className="font-bold text-[#47a44b] mb-2 text-xl">Certificación</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Otorgamos el "Sello de Excelencia Patronato" a negocios que preservan nuestras raíces con calidad.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-[#47a44b]/10 rounded-[4rem] rotate-3"></div>
              <div className="relative bg-white p-2 rounded-[3.2rem] shadow-2xl overflow-hidden group">
                 <img 
                    src="https://i.postimg.cc/VLFxf85G/parihuanas.jpg" 
                    className="rounded-[3rem] w-full h-[550px] object-cover" 
                    alt="Parihuanas Área Protegida"
                  />
                  <div className="absolute top-8 left-8 bg-[#1da1d1] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-[0.2em] shadow-lg">
                    Área Protegida ACA
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sinergia con Vive Talara - Actualizada según requerimiento */}
      <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-[#1da1d1]/5 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-[#1da1d1] font-bold text-[10px] uppercase tracking-[0.4em] mb-6 block">Ecosistema de Colaboración</span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">Trabajo <span className="italic text-[#1da1d1]">Articulado Institucional</span></h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12">
                El fortalecimiento del destino Talara es el resultado de un esfuerzo conjunto sin precedentes. Esta visión de futuro es posible gracias a la gestión técnica y el compromiso de los actores clave de nuestra provincia.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#1da1d1]/30 transition-colors">
                 <h4 className="text-[#1da1d1] font-bold text-xs uppercase tracking-widest mb-4">Entidad Rectora</h4>
                 <p className="text-xl md:text-2xl font-bold font-serif italic text-white leading-tight">Patronato Turístico de Talara</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-[#47a44b]/30 transition-colors">
                 <h4 className="text-[#47a44b] font-bold text-xs uppercase tracking-widest mb-4">Gestión Municipal</h4>
                 <p className="text-xl md:text-2xl font-bold font-serif italic text-white leading-tight">Municipalidad Provincial de Talara</p>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                 <h4 className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-4">Sector Empresarial</h4>
                 <p className="text-xl md:text-2xl font-bold font-serif italic text-white leading-tight">Cámara de Comercio de Talara</p>
              </div>
           </div>

           <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1da1d1]/10 rounded-full blur-[100px]"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1da1d1]/20 text-[#1da1d1] rounded-full text-[11px] font-bold uppercase tracking-widest mb-10 border border-[#1da1d1]/30">
                    Sinergia Estratégica
                 </div>
                 <p className="text-lg md:text-2xl text-slate-300 leading-relaxed font-light mb-12 italic">
                    "Este trabajo articulado es una realidad gracias a la <span className="text-white font-bold">Subgerencia de Turismo de la Municipalidad Provincial de Talara</span>, trabajando en una alianza estratégica de alto impacto con la plataforma <span className="text-[#1da1d1] font-bold">Vive Talara</span>."
                 </p>
                 <div className="flex flex-col md:flex-row items-center gap-6">
                    <a href="https://vivetalara.com" target="_blank" className="px-10 py-5 bg-[#1da1d1] hover:bg-[#158bb6] text-white rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105">
                       CONOCER VIVE TALARA
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
