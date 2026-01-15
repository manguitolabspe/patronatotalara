
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 animate-simple-fade">
      {/* Backdrop con desenfoque */}
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Contenedor del Modal */}
      <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden page-fade-in border border-slate-100 mx-auto">
        <div className="p-8 md:p-12 border-b border-slate-50 flex justify-between items-center bg-stone-50/50">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif italic">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500"
            aria-label="Cerrar"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-8 md:p-12 max-h-[75vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
