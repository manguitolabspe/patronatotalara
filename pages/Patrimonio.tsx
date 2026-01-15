
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

interface FormErrors {
  solicitante?: string;
  email?: string;
}

const Patrimonio: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    solicitante: '',
    email: '',
    motivo: 'Investigación Académica'
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.solicitante.trim()) newErrors.solicitante = "Campo obligatorio";
    if (!formData.email.trim()) newErrors.email = "Campo obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido";

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
        setFormData({ solicitante: '', email: '', motivo: 'Investigación Académica' });
      }, 3000);
    }
  };

  const inputClasses = (hasError: boolean) => `
    w-full px-6 py-4 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 
    outline-none transition-all shadow-sm
    ${hasError ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 focus:border-[#1da1d1] focus:ring-1 focus:ring-[#1da1d1]'}
  `;

  return (
    <div className="bg-white">
      {showToast && (
        <Toast 
          message="Solicitud de acceso enviada" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}

      {/* Hero de Página Especializado: El Legado */}
      <section className="relative pt-48 pb-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/t47hsqSF/DJI-0255-(3).jpg" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105 transition-transform duration-[3s]"
            alt="Patrimonio Histórico de Talara"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
             <span className="text-[#1da1d1] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Centro de Memoria e Identidad</span>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1] font-serif tracking-tight">
                Custodiando el <br/> <span className="italic text-[#1da1d1]">Archivo Vivo</span>
             </h1>
             <h4 className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light opacity-90">
                El Patronato es el repositorio oficial de la historia de Talara. Desde registros de la cultura Tallán hasta la herencia industrial petrolera, documentamos el pasado para educar al presente.
             </h4>
          </div>
        </div>
      </section>

      {/* Digital Heritage: Museo Digital vs App Comercial */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center mb-32">
             <div className="order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-6 bg-sky-500/5 rounded-[3.5rem] group-hover:bg-sky-500/10 transition-colors"></div>
                  <img src="https://i.postimg.cc/9MhGLvVd/Gemini-Generated-Image-8qb0ob8qb0ob8qb0.png" className="relative rounded-[3rem] shadow-2xl w-full h-[500px] md:h-[650px] object-cover transition-transform duration-700 group-hover:scale-[1.02]" alt="Archivo Histórico" />
                  <div className="absolute bottom-10 right-10 bg-white p-10 rounded-3xl shadow-2xl border border-sky-50 max-w-[320px] transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-slate-900 font-bold text-xl italic font-serif">Repositorio Histórico</p>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">Información técnica y cultural profunda que alimenta las rutas de Vive Talara.</p>
                  </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 space-y-10">
                <div className="inline-block px-4 py-1.5 bg-sky-50 text-[#1da1d1] rounded-full text-[10px] font-bold uppercase tracking-widest border border-sky-100">
                  Documentación Técnica
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight">El Valor de la <br/> <span className="text-[#1da1d1]">Verdad Histórica</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                   Mientras las aplicaciones te llevan al lugar hoy, el Patronato te cuenta la historia de hace 100 años. Gestionamos el archivo fotográfico y documental más importante de la provincia.
                </p>
                <div className="space-y-6 pt-4">
                   {[
                     { t: 'Herencia Industrial Petrolera', d: 'Documentación técnica de los orígenes de la industria en Sudamérica.' },
                     { t: 'Crónicas de los Tallanes', d: 'Investigación arqueológica de los asentamientos originales en nuestra costa.' },
                     { t: 'Relatos de la Pesca Ancestral', d: 'Historias orales rescatadas de los gremios de pescadores tradicionales.' }
                   ].map((item, i) => (
                     <div key={i} className="flex gap-8 items-start p-8 rounded-[2rem] border border-slate-50 hover:border-sky-100 transition-all bg-white hover:shadow-xl hover:-translate-y-1">
                        <span className="text-3xl text-[#1da1d1] font-serif italic font-bold">0{i+1}</span>
                        <div>
                           <h4 className="font-bold text-slate-900 mb-2 text-lg">{item.t}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Sinergia Educativa CTA */}
      <section className="py-24 md:py-36 bg-[#0c4a6e] text-white relative overflow-hidden">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1da1d1]/10 rounded-full blur-[100px]"></div>
         <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-10 font-serif italic">¿Quieres profundizar en la historia?</h2>
            <p className="text-sky-100/70 max-w-2xl mx-auto mb-16 text-lg md:text-xl font-light leading-relaxed">
               Visita nuestro centro de documentación físico o solicita acceso a los archivos digitales certificados por el Patronato Turístico.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
               <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-12 py-5 bg-[#47a44b] hover:bg-[#3d8b41] text-white rounded-2xl font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
               >
                  SOLICITAR ACCESO A ARCHIVOS
               </button>
               <a href="https://vivetalara.com" target="_blank" className="px-12 py-5 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg shadow-2xl transition-all hover:bg-white/20 active:scale-95 border border-white/20">
                  VER RUTAS EN VIVE TALARA
               </a>
            </div>
         </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Acceso al Archivo Vivo"
      >
        {isSubmitted ? (
          <div className="text-center py-10 animate-page-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Credenciales en Proceso</h4>
            <p className="text-slate-500">Hemos recibido su solicitud de acceso académico/profesional. Le enviaremos una clave temporal a su correo tras validar sus datos.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Institución / Solicitante</label>
              <input 
                type="text" 
                placeholder="Nombre completo o Entidad" 
                className={inputClasses(!!errors.solicitante)} 
                value={formData.solicitante}
                onChange={(e) => setFormData({...formData, solicitante: e.target.value})}
              />
              {errors.solicitante && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.solicitante}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Correo Electrónico</label>
              <input 
                type="email" 
                placeholder="ejemplo@dominio.com" 
                className={inputClasses(!!errors.email)}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Motivo de la Investigación</label>
              <select 
                className={`${inputClasses(false)} bg-white appearance-none cursor-pointer`}
                value={formData.motivo}
                onChange={(e) => setFormData({...formData, motivo: e.target.value})}
              >
                <option>Investigación Académica</option>
                <option>Uso Periodístico</option>
                <option>Interés Cultural Personal</option>
                <option>Desarrollo de Proyecto Turístico</option>
              </select>
            </div>
            <button type="submit" className="w-full py-5 bg-[#47a44b] hover:bg-[#3d8b41] text-white rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95">
              ENVIAR SOLICITUD
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Patrimonio;
