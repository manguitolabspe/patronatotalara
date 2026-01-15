
import React from 'react';

const Contacto: React.FC = () => {
  const WHATSAPP_NUMBER = "51969669871";
  const WHATSAPP_MESSAGE = encodeURIComponent("Hola, quisiera más información sobre las actividades del Patronato Turístico de Talara.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Banner de Contacto */}
      <section className="relative py-32 bg-[#0c4a6e] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://i.postimg.cc/xjFwfMyr/622500035.jpg" className="w-full h-full object-cover" alt="Contacto Patronato" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">Canales Oficiales</h1>
          <p className="text-sky-200 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Estamos a su disposición para coordinaciones institucionales, acreditaciones de prensa y consultas de la ciudadanía.
          </p>
        </div>
      </section>

      {/* Sección de Mensajería Directa */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-stretch">
              
              {/* Información de Contacto */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 text-[#1da1d1] rounded-full text-[10px] font-bold uppercase tracking-widest border border-sky-100">
                    Atención al Ciudadano
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">Vínculo <br/> <span className="text-[#1da1d1] italic">Institucional</span></h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Nuestro equipo técnico procesa solicitudes de información y propuestas de proyectos ambientales de lunes a viernes.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { 
                      t: 'Oficina Central', 
                      d: 'Cámara de Comercio de Talara, Piura, Perú.',
                      icon: (
                        <svg className="w-6 h-6 text-[#1da1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )
                    },
                    { 
                      t: 'Correo Electrónico', 
                      d: 'contacto@patronatotalara.pe',
                      icon: (
                        <svg className="w-6 h-6 text-[#1da1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )
                    },
                    { 
                      t: 'Línea de WhatsApp', 
                      d: '+51 969 669 871',
                      icon: (
                        <svg className="w-6 h-6 text-[#1da1d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.t}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Acción Directa WhatsApp */}
              <div className="bg-slate-50 rounded-[3.5rem] p-12 md:p-16 border border-slate-100 flex flex-col justify-center items-center text-center space-y-10">
                 <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                 </div>
                 <h3 className="text-3xl font-bold text-slate-900 font-serif">Conexión Inmediata</h3>
                 <p className="text-slate-500 max-w-xs mx-auto leading-relaxed">
                   Envíe su consulta vía WhatsApp para una respuesta más ágil del equipo de gestión.
                 </p>
                 <a 
                   href={WHATSAPP_URL}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xl transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-4"
                 >
                   ABRIR WHATSAPP
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                 </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sello Institucional */}
      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6 text-center">
           <div className="inline-flex flex-col items-center">
             <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-slate-200 p-4 mb-6">
                <img src="https://i.postimg.cc/vmdpQNXH/278909213-117494664264750-4511372216851361679-n.jpg" className="w-full h-full object-contain" alt="Logo Patronato" />
             </div>
             <p className="text-[10px] uppercase tracking-[0.5em] text-[#1da1d1] font-bold mb-2">Patronato Turístico de Talara</p>
             <h2 className="text-2xl font-bold text-slate-900 font-serif italic">Por la sostenibilidad de nuestra provincia</h2>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
