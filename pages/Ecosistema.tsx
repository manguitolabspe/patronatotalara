
import React, { useState } from 'react';
import ViveTalaraSection from '../components/ViveTalaraSection';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

interface FormErrors {
  visitante?: string;
  telefono?: string;
  fecha?: string;
  personas?: string;
}

const Ecosistema: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    visitante: '',
    telefono: '',
    fecha: '',
    personas: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.visitante.trim()) newErrors.visitante = "Campo obligatorio";
    if (!formData.telefono.trim()) newErrors.telefono = "Campo obligatorio";
    if (!formData.fecha.trim()) newErrors.fecha = "Seleccione una fecha";
    if (!formData.personas.trim()) newErrors.personas = "Campo obligatorio";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setShowToast(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setIsModalOpen(false);
        setFormData({ visitante: '', telefono: '', fecha: '', personas: '' });
      }, 3000);
    }
  };

  const inputClasses = (hasError: boolean) => `
    w-full px-6 py-4 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 
    outline-none transition-all shadow-sm
    ${hasError ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'}
  `;

  return (
    <div className="animate-fade-in">
      {showToast && (
        <Toast 
          message="Interés registrado correctamente" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}

      {/* Hero Section */}
      <section className="relative py-32 bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://i.postimg.cc/Wb3BFb42/balconesweb.jpg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Ecosistema ACA Balcones</h1>
          <p className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Santuario marino-costero en el punto más occidental de Sudamérica, donde la vida silvestre y el atardecer se funden en un solo horizonte.
          </p>
        </div>
      </section>

      {/* Sinergia Digital */}
      <ViveTalaraSection />

      {/* Información Detallada ACA Balcones */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-100">
                Reserva Natural Protegida
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight">
                El Guardián del <br/> <span className="text-emerald-600 italic">Punto Extremo</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                El <strong>ACA Balcones</strong> (Área de Conservación Ambiental "Balcones") es una zona marino-costera protegida que incluye Punta Pariñas/Punta Balcones. Conserva una biodiversidad invaluable y es el escenario perfecto para el turismo ecológico y el desarrollo sostenible de la región, impulsado por la <strong>Municipalidad de La Brea</strong> y el apoyo de entidades ambientales nacionales.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { t: 'Biodiversidad Única', d: 'Protege refugios de aves playeras migratorias y fauna marina en peligro.' },
                  { t: 'Hito Geográfico', d: 'Marca el punto más occidental de América del Sur con el último atardecer del continente.' }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-10 bg-emerald-600/5 rounded-full blur-[100px]"></div>
              <img 
                src="https://i.postimg.cc/W3xt9Z0Y/salar-de-Negritos-Piura-David-Camargo-Promperu.jpg" 
                className="relative rounded-[4rem] shadow-2xl h-[550px] w-full object-cover" 
                alt="Salar de Negritos - ACA Balcones" 
              />
              <div className="absolute -bottom-8 -right-8 bg-emerald-600 text-white p-10 rounded-[2.5rem] shadow-2xl max-w-[280px]">
                <p className="text-sm font-bold uppercase tracking-widest mb-2">Componentes</p>
                <ul className="text-xs space-y-2 opacity-90 font-medium">
                  <li>• Punta Pariñas / Balcones</li>
                  <li>• Humedal Balcones</li>
                  <li>• Laguna Las Parihuanas</li>
                  <li>• Salar de Negritos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 font-serif italic">¿Qué vivir en Balcones?</h3>
                <p className="text-slate-400 text-lg font-light">
                  Fomentamos actividades de bajo impacto que respetan el ecosistema marino-costero único de nuestro litoral.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { 
                    t: 'Aventura Oceánica', 
                    d: 'Practica surf de clase mundial, vela y deportes náuticos en aguas cristalinas de medialuna.',
                    icon: (
                      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 10l5 5 5-5" />
                      </svg>
                    )
                  },
                  { 
                    t: 'Observación de Fauna', 
                    d: 'Avistamiento de lobos marinos, pelícanos y gaviotas en su hábitat natural sin disturbios.',
                    icon: (
                      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )
                  },
                  { 
                    t: 'Senderismo Crítico', 
                    d: 'Explora rutas de educación ambiental que recorren el humedal y el salar de Negritos.',
                    icon: (
                      <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
                    <div className="mb-6">{item.icon}</div>
                    <h4 className="text-xl font-bold mb-4 text-emerald-400 font-serif italic">{item.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-20 pt-12 border-t border-white/10 text-center">
                 <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-6">En colaboración institucional con</p>
                 <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
                    <span className="text-white font-bold text-xl italic font-serif">Municipalidad de La Brea</span>
                    <span className="text-white font-bold text-xl italic font-serif">Ministerio del Ambiente</span>
                    <span className="text-white font-bold text-xl italic font-serif">Patronato Turístico</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-serif">Un compromiso con el futuro</h2>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
             Más de 10,000 algarrobos plantados y vigilancia satelital constante para proteger nuestro patrimonio natural de la tala ilegal.
           </p>
           <div className="flex justify-center">
             <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
             >
               PROGRAMAR VISITA ECOLÓGICA
             </button>
           </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Agendar Visita Guiada"
      >
        {isSubmitted ? (
          <div className="text-center py-10 animate-page-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Registro Exitoso</h4>
            <p className="text-slate-500">Un guía certificado del Patronato se contactará con usted para confirmar la disponibilidad y el punto de encuentro.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Visitante Responsable</label>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className={inputClasses(!!errors.visitante)} 
                  value={formData.visitante}
                  onChange={(e) => setFormData({...formData, visitante: e.target.value})}
                />
                {errors.visitante && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.visitante}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Teléfono</label>
                <input 
                  type="tel" 
                  placeholder="+51" 
                  className={inputClasses(!!errors.telefono)}
                  value={formData.telefono}
                  onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                />
                {errors.telefono && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.telefono}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Fecha Sugerida</label>
                <input 
                  type="date" 
                  className={`${inputClasses(!!errors.fecha)} bg-white`}
                  value={formData.fecha}
                  onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                />
                {errors.fecha && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.fecha}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Número de Personas</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  placeholder="Máx 10" 
                  className={inputClasses(!!errors.personas)}
                  value={formData.personas}
                  onChange={(e) => setFormData({...formData, personas: e.target.value})}
                />
                {errors.personas && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.personas}</p>}
              </div>
            </div>
            <button type="submit" className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95">
              CONFIRMAR INTERÉS
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Ecosistema;
