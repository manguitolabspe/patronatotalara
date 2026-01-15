
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
    window.scrollTo(0, 0);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#nosotros-page') setCurrentPage('nosotros');
      else if (hash === '#ecosistema-page') setCurrentPage('ecosistema');
      else if (hash === '#patrimonio-page') setCurrentPage('patrimonio');
      else if (hash === '#gastronomia-page') setCurrentPage('gastronomia');
      else if (hash === '#contacto-page') setCurrentPage('contacto');
      else setCurrentPage('home');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const hashMap: Record<PageId, string> = {
      home: '#',
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
      case 'nosotros': return <Nosotros />;
      case 'ecosistema': return <Ecosistema />;
      case 'patrimonio': return <Patrimonio />;
      case 'gastronomia': return <Gastronomia />;
      case 'contacto': return <Contacto />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-teal-500 selection:text-white overflow-x-hidden">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main className="flex-grow pt-[80px] md:pt-[88px] relative overflow-x-hidden">
        <div className="page-fade-in w-full">
          {renderCurrentPage()}
        </div>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
