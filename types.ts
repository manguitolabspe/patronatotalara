
import { ReactNode } from 'react';

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Ecología' | 'Cultura' | 'Gastronomía';
}

export interface ImpactStats {
  label: string;
  value: string;
  icon: ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
