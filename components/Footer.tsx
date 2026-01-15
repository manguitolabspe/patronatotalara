
import React from 'react';
import { PageId } from '../App';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, page: PageId) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 md:py-24 mt-auto overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 flex-shrink-0">
                <img 
                  src="https://i.postimg.cc/vmdpQNXH/278909213-117494664264750-4511372216851361679-n.jpg" 
                  alt="Logo Patronato" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-[#1da1d1] font-bold">Entidad Oficial</p>
                <h3 className="text-base md:text-xl font-bold text-slate-900 leading-tight tracking-tight">
                  PATRONATO TURÍSTICO <br className="hidden sm:block"/> DE TALARA
                </h3>
              </div>
            </div>
            
            <p className="text-slate-500 max-w-md leading-relaxed mb-8 text-sm md:text-base">
              Asociación civil dedicada a la protección y promoción del patrimonio natural de la provincia de Talara, impulsando el desarrollo sostenible.
            </p>
            
            <a 
              href="https://www.facebook.com/people/Patronato-Tur%C3%ADstico-de-Talara/100083185119789/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#1da1d1] hover:border-[#1da1d1] transition-all font-bold text-[10px] uppercase tracking-widest shadow-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Sigue nuestra labor
            </a>
          </div>

          {/* Nav Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-[10px] uppercase tracking-[0.3em]">Portal</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleNav(e, 'home')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-sm font-medium">Inicio</button></li>
              <li><button onClick={(e) => handleNav(e, 'nosotros')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-sm font-medium">Misión Institucional</button></li>
              <li><button onClick={(e) => handleNav(e, 'ecosistema')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-sm font-medium">Ecosistema ACA</button></li>
              <li><button onClick={(e) => handleNav(e, 'contacto')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-sm font-medium">Contacto</button></li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-[10px] uppercase tracking-[0.3em]">Oficina</h4>
            <div className="space-y-4 text-sm text-slate-500">
              <p className="flex gap-3">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                Cámara de Comercio, Talara, Piura.
              </p>
              <p className="flex gap-3">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="break-all">contacto@patronatotalara.pe</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-400 font-medium text-center sm:text-left">
            © 2026 Patronato Turístico de Talara. <br className="sm:hidden"/> Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.2em] text-slate-300 font-bold">Respaldo Tecnológico</span>
            <span className="text-sm md:text-base font-bold tracking-tighter text-slate-800 italic">manguito labs <span className="text-[#1da1d1]">●</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
