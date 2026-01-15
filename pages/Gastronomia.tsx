
import React, { useState } from 'react';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

interface FormErrors {
  establecimiento?: string;
  propietario?: string;
  ruc?: string;
}

const Gastronomia: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const [formData, setFormData] = useState({
    establecimiento: '',
    propietario: '',
    ruc: '',
    categoria: 'Restaurante Tradicional',
    mensaje: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.establecimiento.trim()) newErrors.establecimiento = "El nombre es obligatorio";
    if (!formData.propietario.trim()) newErrors.propietario = "El propietario es obligatorio";
    if (!formData.ruc.trim()) newErrors.ruc = "El RUC es obligatorio";
    else if (!/^\d{11}$/.test(formData.ruc)) newErrors.ruc = "Debe tener 11 dígitos";
    
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
        setFormData({ establecimiento: '', propietario: '', ruc: '', categoria: 'Restaurante Tradicional', mensaje: '' });
      }, 3000);
    }
  };

  const inputClasses = (hasError: boolean) => `
    w-full px-6 py-4 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 
    outline-none transition-all shadow-sm
    ${hasError ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 focus:border-[#1da1d1] focus:ring-1 focus:ring-[#1da1d1]'}
  `;

  return (
    <div className="page-fade-in">
      {showToast && (
        <Toast 
          message="Postulación enviada correctamente" 
          type="success" 
          onClose={() => setShowToast(false)} 
        />
      )}

      <section className="relative py-32 bg-amber-900 overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-[url('https://i.postimg.cc/kgkf9RJs/delicioso-ceviche-mariscos-peru-chiles-garbanzossss.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">Herencia Culinaria</h1>
          <p className="text-amber-100 text-lg md:text-xl max-w-3xl mx-auto font-light">
            Certificamos la excelencia del sabor que une a la provincia de Talara.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-widest border border-amber-100">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Certificación Institucional
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif leading-tight">El Sello de <br/> <span className="text-amber-600">Excelencia Patronato</span></h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                El Patronato Turístico otorga una certificación anual a los restaurantes que cumplen con tres pilares: <span className="font-bold text-slate-900">Insumos de pesca responsable</span>, <span className="font-bold text-slate-900">Preservación de la receta original</span> y <span className="font-bold text-slate-900">Excelencia en el servicio</span>.
              </p>
              
              <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 relative overflow-hidden group">
                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-200/20 rounded-full blur-2xl"></div>
                 <h4 className="font-bold text-amber-900 text-xl mb-4 italic font-serif">"La Boda": Patrimonio Gastronómico</h4>
                 <p className="text-slate-600 text-sm leading-relaxed mb-6">
                   Investigamos y documentamos la evolución de este plato para que su historia no se pierda. En la App Vive Talara puedes encontrar los locales certificados por nosotros para degustarlo.
                 </p>
                 <a href="https://vivetalara.com" target="_blank" className="inline-flex items-center gap-3 text-amber-700 font-bold text-sm group-hover:gap-5 transition-all">
                   Ver locales certificados en Vive Talara
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                 </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/5 rounded-[4rem]"></div>
              <img 
                src="https://i.postimg.cc/D0FNhJcs/Gemini-Generated-Image-6fg2s56fg2s56fg2.png" 
                className="relative rounded-[3rem] shadow-2xl w-full h-[600px] object-cover" 
                alt="Certificación Gastronómica"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px] border-l-8 border-amber-500">
                <p className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-1">Estatus 2026</p>
                <p className="text-amber-600 font-black text-xl italic font-serif">12 Locales Certificados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-serif italic">¿Eres dueño de un restaurante?</h2>
          <p className="text-slate-500 text-lg mb-12">
            Inicia el proceso de certificación institucional y forma parte de la oferta oficial recomendada por el Patronato y listada con prioridad en Vive Talara.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-5 bg-[#0c4a6e] text-white rounded-2xl font-bold text-xl shadow-2xl hover:bg-[#1da1d1] transition-all active:scale-95"
            >
              POSTULAR A CERTIFICACIÓN
            </button>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Postulación a Certificación"
      >
        {isSubmitted ? (
          <div className="text-center py-10 animate-page-fade-in">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4 font-serif">Solicitud Recibida</h4>
            <p className="text-slate-500">Nuestro equipo técnico revisará la información y se contactará con usted en un plazo de 72 horas hábiles.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Establecimiento</label>
                <input 
                  type="text" 
                  placeholder="Nombre comercial" 
                  className={inputClasses(!!errors.establecimiento)}
                  value={formData.establecimiento}
                  onChange={(e) => setFormData({...formData, establecimiento: e.target.value})}
                />
                {errors.establecimiento && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.establecimiento}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Propietario</label>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className={inputClasses(!!errors.propietario)}
                  value={formData.propietario}
                  onChange={(e) => setFormData({...formData, propietario: e.target.value})}
                />
                {errors.propietario && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.propietario}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">RUC</label>
                <input 
                  type="text" 
                  placeholder="11 dígitos" 
                  className={inputClasses(!!errors.ruc)}
                  value={formData.ruc}
                  onChange={(e) => setFormData({...formData, ruc: e.target.value})}
                />
                {errors.ruc && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.ruc}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Categoría</label>
                <select 
                  className={`${inputClasses(false)} bg-white appearance-none cursor-pointer`}
                  value={formData.categoria}
                  onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                >
                  <option>Restaurante Tradicional</option>
                  <option>Hospedaje Ecológico</option>
                  <option>Operador Turístico</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-1">Mensaje o Referencias</label>
              <textarea 
                placeholder="Cuéntenos sobre su compromiso con la identidad local..." 
                rows={4} 
                className={`${inputClasses(false)} resize-none`}
                value={formData.mensaje}
                onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="w-full py-5 bg-[#0c4a6e] hover:bg-[#1da1d1] text-white rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95">
              ENVIAR POSTULACIÓN
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
};

export default Gastronomia;
