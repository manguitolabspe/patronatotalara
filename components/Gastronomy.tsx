
import React from 'react';

const Gastronomy: React.FC = () => {
  return (
    <section id="gastronomía" className="py-24 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/D0FNhJcs/Gemini_Generated_Image_6fg2s56fg2s56fg2.png" 
                alt="Plato La Boda Talara" 
                className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute top-10 right-10 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg border border-stone-100 max-w-[200px]">
                <p className="text-stone-800 font-bold text-lg mb-1">"La Boda"</p>
                <p className="text-stone-500 text-sm">El sabor que une generaciones en Talara.</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 italic">Un Banquete de Historia</h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              La gastronomía de Talara no es solo alimento, es identidad. El plato <strong>"La Boda"</strong> es nuestra joya culinaria: una combinación magistral de ingredientes locales que representa la fusión de culturas y la abundancia de nuestra costa.
            </p>
            <ul className="space-y-4 mb-10">
              {['Ingredientes locales frescos', 'Receta tradicional ancestral', 'Símbolo de comunidad y fiesta'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-stone-700 font-medium">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all">
              Descubrir Receta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gastronomy;
