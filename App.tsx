
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Ecosistema from './pages/Ecosistema';
import Patrimonio from './pages/Patrimonio';
import Gastronomia from './pages/Gastronomia';
import Contacto from './pages/Contacto';

export type PageId = 'home' | 'nosotros' | 'ecosistema' | 'patrimonio' | 'gastronomia' | 'contacto';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash;
      if (hash === '#nosotros-page') setCurrentPage('nosotros');
      else if (hash === '#ecosistema-page') setCurrentPage('ecosistema');
      else if (hash === '#patrimonio-page') setCurrentPage('patrimonio');
      else if (hash === '#gastronomia-page') setCurrentPage('gastronomia');
      else if (hash === '#contacto-page') setCurrentPage('contacto');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', syncHash);
    syncHash();
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const hashMap: Record<PageId, string> = {
      home: '',
      nosotros: '#nosotros-page',
      ecosistema: '#ecosistema-page',
      patrimonio: '#patrimonio-page',
      gastronomia: '#gastronomia-page',
      contacto: '#contacto-page'
    };
    window.location.hash = hashMap[page];
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'nosotros': return <Nosotros key="nosotros" />;
      case 'ecosistema': return <Ecosistema key="ecosistema" />;
      case 'patrimonio': return <Patrimonio key="patrimonio" />;
      case 'gastronomia': return <Gastronomia key="gastronomia" />;
      case 'contacto': return <Contacto key="contacto" />;
      default: return <Home key="home" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-teal-500 selection:text-white">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main className="flex-grow pt-[72px] md:pt-[88px] overflow-hidden">
        <div className="page-fade-in">
          {renderCurrentPage()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
