
export type ServiceCategory = 'Formations' | 'Conférences' | 'Ateliers' | 'Coaching' | 'Programmes';

export interface SubService {
  title: string;
  description: string;
  objectives?: string[];
  points?: string[];
  duration?: string;
  target?: string;
  deliverable?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  fullDescription: string;
  image: string;
  subServices: SubService[];
  approach?: string[];
  formats?: string[];
}

export interface Lead {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  profile: 'Parent' | 'Jeune' | 'Immigrant' | 'Entreprise' | 'Institution' | 'Autre';
  subject: string;
  message: string;
}
