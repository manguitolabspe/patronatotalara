
import React, { useState, useEffect } from 'react';
import { PageId } from '../App';

interface HeaderProps {
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: PageId }[] = [
    { name: 'Inicio', id: 'home' },
    { name: 'Misión', id: 'nosotros' },
    { name: 'Ecosistema', id: 'ecosistema' },
    { name: 'Patrimonio', id: 'patrimonio' },
    { name: 'Gastronomía', id: 'gastronomia' },
    { name: 'Contacto', id: 'contacto' }
  ];

  const handleLinkClick = (e: React.MouseEvent, page: PageId) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'home')} 
          className="flex items-center gap-4 group cursor-pointer flex-shrink-0"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100 flex-shrink-0 transition-transform group-hover:scale-105">
             <img 
               src="https://i.postimg.cc/vmdpQNXH/278909213-117494664264750-4511372216851361679-n.jpg" 
               alt="Logo Patronato Turístico de Talara"
               className="w-full h-full object-cover"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] md:text-[14px] font-bold text-[#0c4a6e] leading-tight uppercase tracking-tight">
              PATRONATO TURÍSTICO
            </span>
            <span className="text-[10px] md:text-[12px] font-black text-[#47a44b] tracking-[0.2em] uppercase">
              TALARA
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.id === 'home' ? '#' : `#${link.id}-page`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-[10px] xl:text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative group py-2 ${
                currentPage === link.id ? 'text-[#1da1d1]' : 'text-slate-500 hover:text-[#1da1d1]'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#47a44b] transition-all ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <div className="h-6 w-[1px] bg-slate-100 ml-2"></div>
          <a 
            href="https://vivetalara.com" 
            target="_blank" 
            className="ml-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-[9px] xl:text-[10px] font-bold tracking-widest transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <img src="https://i.postimg.cc/tCQYWhqC/logo-(2).png" alt="" className="w-4 h-4 object-contain brightness-0 invert" />
            VIVE TALARA
          </a>
        </nav>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden p-2 text-slate-800"
          aria-label="Menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl flex flex-col p-6 gap-2 animate-page-fade-in">
          {navLinks.map((link) => (
            <button 
              key={link.id} 
              onClick={(e) => handleLinkClick(e as any, link.id)}
              className={`py-4 px-4 text-left text-base font-bold rounded-xl transition-colors ${currentPage === link.id ? 'bg-sky-50 text-[#1da1d1]' : 'text-slate-600'}`}
            >
              {link.name}
            </button>
          ))}
          <a 
            href="https://vivetalara.com" 
            target="_blank" 
            className="mt-4 py-4 bg-amber-500 text-white text-center font-bold rounded-xl flex items-center justify-center gap-3"
          >
            VIVE TALARA APP
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
