
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
    <footer className="bg-slate-50 border-t border-slate-100 py-24 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden bg-white shadow-md border border-slate-100 flex-shrink-0">
                <img 
                  src="https://i.postimg.cc/vmdpQNXH/278909213-117494664264750-4511372216851361679-n.jpg" 
                  alt="Logo Patronato" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-[#1da1d1] font-bold mb-1">Entidad Oficial</p>
                <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tighter cursor-pointer hover:text-[#1da1d1] transition-colors" onClick={(e) => handleNav(e, 'home')}>
                  PATRONATO TURÍSTICO <br/> PROVINCIA DE TALARA
                </h3>
              </div>
            </div>
            
            <p className="text-slate-500 max-w-sm leading-relaxed mb-10 text-lg">
              Asociación civil comprometida con la protección, certificación y promoción del patrimonio natural y cultural de nuestra querida Talara.
            </p>
            <div className="flex gap-4">
               <a 
                 href="https://www.facebook.com/people/Patronato-Tur%C3%ADstico-de-Talara/100083185119789/?locale=es_LA" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="px-8 py-3 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1da1d1] hover:text-white transition-all font-bold text-[11px] uppercase tracking-widest shadow-sm gap-2"
               >
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                 Facebook Oficial
               </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-8 text-xs uppercase tracking-[0.4em]">Navegación</h4>
            <ul className="space-y-5">
              <li><button onClick={(e) => handleNav(e, 'nosotros')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-base font-medium">Autoridad Institucional</button></li>
              <li><button onClick={(e) => handleNav(e, 'ecosistema')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-base font-medium">Ecosistema ACA</button></li>
              <li><button onClick={(e) => handleNav(e, 'patrimonio')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-base font-medium">Archivo Histórico</button></li>
              <li><button onClick={(e) => handleNav(e, 'gastronomia')} className="text-slate-500 hover:text-[#1da1d1] transition-colors text-base font-medium">Sellos de Excelencia</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-8 text-xs uppercase tracking-[0.4em]">Oficina Central</h4>
            <div className="space-y-6 text-base text-slate-500">
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>Cámara de Comercio de Talara, Piura, Perú.</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <p>contacto@patronatotalara.pe</p>
              </div>
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <p>+51 969 669 871</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 font-medium tracking-wide">
            © 2026 Patronato Turístico de Talara. Todos los derechos reservados.
          </p>
          <div className="mt-8 md:mt-0 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-slate-300 font-bold">Respaldo Estratégico</span>
            <span className="text-lg font-bold tracking-tighter text-slate-800 italic">manguito labs <span className="text-[#1da1d1]">●</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
