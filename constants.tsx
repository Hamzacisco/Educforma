
import { ServiceDetail, ServiceCategory } from './types.ts';

export const CONTACT_INFO = {
  phone: "+1 438 835 2501",
  email: "contact@educforma.ca",
  address: "7177 rue De Noue, Montréal (Québec) H1S 2E5, Canada",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=7177+rue+De+Noue+Montreal+Quebec+H1S2E5"
};

// Exact filenames as provided by the user (assuming they are in the root directory)
export const PERMANENT_FOUNDER_PORTRAIT = "IMG_9828.jpg";
export const PERMANENT_FOUNDER_ACTION = "IMG_9829.jpg";

interface TranslatedContent {
  founder: {
    intro: string;
    content: string;
    points: string[];
    conclusion: string;
    signature: string;
    name: string;
  };
  services: ServiceDetail[];
}

export const TRANSLATED_CONTENT: Record<string, TranslatedContent> = {
  fr: {
    founder: {
      intro: "Chers partenaires, apprenants et visiteurs,",
      content: "L’Académie Internationale EDUCFORMA a été fondée sur une conviction forte : former seul ne suffit plus. Un impact réel exige une orientation, un soutien et une transformation durable des parcours humains et professionnels.\n\nFort de plus de vingt ans d’expérience en Afrique, en Europe et en Amérique du Nord, j’ai pu constater que le talent, l’intelligence et la motivation existent partout. Trop souvent, cependant, ils restent sous-utilisés faute de conseils appropriés et de systèmes de soutien efficaces.\n\nEDUCFORMA a donc été créée en tant qu’académie internationale, basée au Canada et ouverte sur le monde.",
      points: [
        "Libérer le potentiel individuel et collectif",
        "Renforcer les compétences professionnelles et personnelles",
        "Développer un leadership responsable et éthique",
        "Faciliter une intégration durable",
        "Contribuer positivement aux organisations et à la société"
      ],
      conclusion: "Nous plaçons l’humain, les valeurs et la responsabilité au cœur de tout ce que nous faisons. Nos programmes de formation, conférences, ateliers et initiatives de soutien sont conçus pour relever les défis du monde réel, inspirer l’action et générer un impact mesurable.",
      signature: "Avec engagement et détermination,",
      name: "M. Ousmane Ndiaye"
    },
    services: [
      {
        id: 'formations',
        title: '1. Nos Formations',
        category: 'Formations' as ServiceCategory,
        summary: 'Des parcours certifiants et sur mesure pour chaque public.',
        fullDescription: "L’Académie Internationale EDUCFORMA propose des formations certifiantes et sur mesure, conçues pour répondre aux besoins spécifiques des jeunes, des cadres et dirigeants, des entreprises, des organisations et des institutions publiques, au Canada francophone et à l’international (Europe – Afrique).",
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        formats: ["Présentiel", "En ligne", "Hybride", "Certifiant"],
        subServices: [
          {
            title: "Formations pour les Jeunes (5 à 25 ans)",
            description: "Aider les jeunes à se connaître, s’orienter et réussir leur insertion sociale et professionnelle.",
            objectives: ["Développer le potentiel et l’autonomie", "Construire un projet de vie et de carrière", "Favoriser l’engagement et la responsabilité"],
            points: ["Leadership personnel & confiance en soi", "Orientation scolaire et professionnelle", "Employabilité & insertion professionnelle", "Communication & prise de parole en public", "Réussir son intégration sociale et professionnelle", "Initiation à l’entrepreneuriat & leadership jeunesse"]
          },
          {
            title: "Formations pour Cadres, Managers & Dirigeants",
            description: "Renforcer le leadership, la performance managériale et la capacité de décision.",
            objectives: ["Développer un leadership responsable", "Améliorer la performance individuelle et collective", "Conduire efficacement le changement"],
            points: ["Leadership & management interculturel", "Leadership stratégique & gouvernance", "Management des équipes & performance durable", "Communication managériale & influence", "Gestion du changement & transformation", "Leadership exécutif & posture du dirigeant"]
          },
          {
            title: "Formations pour Entreprises & Organisations",
            description: "Accompagner la croissance, la transformation et la performance durable des organisations.",
            objectives: ["Renforcer les compétences clés", "Mobiliser et engager les équipes", "Aligner performance et valeurs"],
            points: ["Développement du capital humain & talents", "Gestion du changement & transformation organisationnelle", "Leadership & management de la diversité", "Communication institutionnelle & de crise", "Gouvernance, éthique & responsabilité", "Conception de programmes de formation sur mesure", "Team building"]
          },
          {
            title: "Formations pour Institutions & Gouvernements",
            description: "Adaptées aux enjeux du secteur public, de la gouvernance et du leadership institutionnel.",
            objectives: ["Renforcer la qualité du service public", "Développer un leadership éthique", "Accompagner les réformes et transformations"],
            points: ["Leadership plus & gouvernance responsable", "Communication publique & prise de parole institutionnelle", "Gestion des politiques publiques & leadership territorial", "Développement des compétences des agents publics", "Gestion du changement dans le secteur public", "Intégration, diversité & cohésion sociale"]
          },
          {
            title: "Formations pour Nouveaux Arrivants & Familles",
            description: "Favoriser une intégration harmonieuse, durable et réussie sur les plans social et professionnel.",
            objectives: ["Faciliter l’intégration sociale et professionnelle", "Renforcer la stabilité familiale", "Favoriser l’autonomie et la réussite"],
            points: ["Réussir son intégration au Canada", "Insertion professionnelle & carrière durable", "Communication interculturelle & adaptation culturelle", "Intégration familiale & réussite éducative", "Droits, devoirs et citoyenneté", "Leadership, résilience et projet de vie"]
          }
        ]
      },
      {
        id: 'conferences',
        title: '2. Nos Conférences',
        category: 'Conférences' as ServiceCategory,
        summary: 'Inspirer – Mobiliser – Transformer.',
        fullDescription: "Des conférences conçues pour inspirer, éveiller les consciences et susciter l’action. Elles s’adressent aux jeunes, cadres, entreprises et institutions publiques.",
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Conférences Jeunesse (Scolaire & Universitaire)",
            description: "Aider les jeunes à croire en leur potentiel, clarifier leur vision et construire leur avenir.",
            objectives: ["Inspirer et motiver", "Donner des repères et des clés concrètes", "Encourager l’autonomie"],
            points: ["Révéler son potentiel et sa vision de vie", "Leadership personnel & confiance en soi", "Orientation, ambition et réussite", "Réussir son intégration sociale et professionnelle", "Résilience, persévérance et dépassement", "Jeunesse, valeurs et engagement citoyen"]
          },
          {
            title: "Conférences pour Cadres & Dirigeants",
            description: "Talks stratégiques pour renforcer le leadership and la posture managériale.",
            objectives: ["Inspirer un leadership conscient", "Aligner vision, valeurs and performance", "Mobiliser autour d’une vision commune"],
            points: ["Leadership responsable dans un monde en mutation", "Manager la diversité and la performance interculturelle", "Vision stratégique, gouvernance and décision", "Leadership, valeurs and performance durable", "Conduire le changement avec impact"]
          },
          {
            title: "Conférences Entreprises & Organisations",
            description: "Conférences conçues pour accompagner la transformation humaine.",
            objectives: ["Mobiliser les collaborateurs", "Favoriser l’engagement", "Soutenir la performance collective"],
            points: ["Le capital humain, moteur de performance", "Engagement, motivation and culture d’entreprise", "Leadership à l’ère du changement", "Diversité, inclusion and cohésion d’équipe", "Communication, influence and image institutionnelle"]
          },
          {
            title: "Conférences Institutions & Gouvernements",
            description: "Adaptées aux enjeux du leadership public and de la gouvernance.",
            objectives: ["Renforcer le leadership institutionnel", "Accompagner les transformations publiques", "Contribuer au développement social"],
            points: ["Leadership public, éthique and responsabilité", "Gouvernance, transparence and impact social", "Communication publique institutionnelle", "Gestion du changement dans le secteur public", "Jeunesse, politiques publiques and développement"]
          },
          {
            title: "Conférences Nouveaux Arrivants & Familles",
            description: "Soutenir une intégration réussie, équilibrée and durable.",
            objectives: ["Donner des repères clairs", "Renforcer la confiance and l’autonomie", "Favoriser une intégration harmonieuse"],
            points: ["Réussir son intégration au Canada", "Codes culturels and institutionnels", "Famille, éducation and réussite en terre d’accueil", "Résilience, identité and adaptation culturelle", "Projet de vie, leadership personnel and avenir"]
          }
        ]
      },
      {
        id: 'ateliers',
        title: '3. Nos Ateliers & Séminaires',
        category: 'Ateliers' as ServiceCategory,
        summary: 'Formats interactifs pour un impact immédiat.',
        fullDescription: "Apprendre par l'action (Learning by doing) à travers des ateliers dynamiques centrés sur le développement des compétences.",
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Ateliers pour les Jeunes (5-25 ans)",
            description: "Parcours adaptés pour aider les jeunes à révéler leur potentiel.",
            objectives: ["Développer l’autonomie", "Clarifier les choix et objectifs", "Renforcer la capacité d’action"],
            points: ["Confiance en soi & leadership personnel", "Orientation scolaire & projet professionnel", "Techniques de recherche d’emploi (CV, Entrevues)", "Prise de parole en public & communication", "Gestion du stress, motivation et persévérance"]
          },
          {
            title: "Ateliers Cadres, Managers & Dirigeants",
            description: "Formats interactifs pour renforcer l'efficacité managériale.",
            objectives: ["Compétences managériales", "Leadership"],
            points: ["Management d'équipe", "Communication stratégique"]
          }
        ]
      },
      {
        id: 'coaching',
        title: '4. Coaching & Accompagnement',
        category: 'Coaching' as ServiceCategory,
        summary: 'Soutien individuel pour votre transformation.',
        fullDescription: "Un accompagnement sur mesure pour lever les freins et atteindre vos sommets professionnels and personnels.",
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Coaching de Performance",
            description: "Pour les professionnels visant l'excellence.",
            objectives: ["Optimisation", "Résultats"],
            points: ["Leadership personnel", "Gestion du temps"]
          }
        ]
      },
      {
        id: 'programmes',
        title: '5. Programmes Spéciaux',
        category: 'Programmes' as ServiceCategory,
        summary: 'Parcours structurés à fort impact social.',
        fullDescription: "Des initiatives de formation longue durée conçues pour des transformations structurelles.",
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Programme Ambassadeurs",
            description: "Former les leaders communautaires de demain.",
            objectives: ["Leadership", "Impact social"],
            points: ["Engagement citoyen", "Gestion de projets"]
          }
        ]
      }
    ]
  },
  en: {
    founder: {
      intro: "Dear partners, learners and visitors,",
      content: "EDUCFORMA International Academy was founded on a strong conviction: training alone is no longer enough. Real impact requires guidance, support and a lasting transformation of human and professional paths.",
      points: [
        "Unleash individual and collective potential",
        "Strengthen professional and personal skills",
        "Develop responsible and ethical leadership",
        "Facilitate sustainable integration",
        "Positively contribute to organizations and society"
      ],
      conclusion: "We place humans, values and responsibility at the heart of everything we do.",
      signature: "With commitment and determination,",
      name: "Mr. Ousmane Ndiaye"
    },
    services: [
      {
        id: 'formations',
        title: '1. Our Training',
        category: 'Formations' as ServiceCategory,
        summary: 'Certifying and custom paths for all audiences.',
        fullDescription: "EDUCFORMA Academy offers certifying and tailor-made training designed for youth, managers, and organizations.",
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
        formats: ["In-person", "Online", "Hybrid", "Certifying"],
        subServices: [
          {
            title: "Youth Programs (5-25 years old)",
            description: "Empowering young people to find their path and succeed.",
            objectives: ["Autonomy", "Self-knowledge"],
            points: ["Personal leadership", "Social integration"]
          }
        ]
      },
      {
        id: 'conferences',
        title: '2. Our Conferences',
        category: 'Conférences' as ServiceCategory,
        summary: 'Inspire – Mobilize – Transform.',
        fullDescription: "Talks designed to inspire and drive action in individuals and teams.",
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Inspirational Leadership",
            description: "Unlocking potential through powerful narratives and expertise.",
            objectives: ["Mobilization", "Vision"],
            points: ["Resilience", "Ethical leadership"]
          }
        ]
      },
      {
        id: 'ateliers',
        title: '3. Workshops & Seminars',
        category: 'Ateliers' as ServiceCategory,
        summary: 'Interactive formats for immediate skill building.',
        fullDescription: "Practical sessions focused on learning by doing.",
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Hands-on Skills",
            description: "Rapid development of critical competencies.",
            objectives: ["Actionable learning"],
            points: ["Communication", "Problem solving"]
          }
        ]
      },
      {
        id: 'coaching',
        title: '4. Coaching',
        category: 'Coaching' as ServiceCategory,
        summary: 'Personalized guidance for success.',
        fullDescription: "Tailored coaching sessions to reach your specific goals.",
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Executive Coaching",
            description: "Specialized support for leaders.",
            objectives: ["Clarity", "Performance"],
            points: ["Conflict management", "Strategic influence"]
          }
        ]
      },
      {
        id: 'programmes',
        title: '5. Special Programs',
        category: 'Programmes' as ServiceCategory,
        summary: 'Impact-driven initiatives for long-term transformation.',
        fullDescription: "Extended programs focused on sustainable change.",
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
        subServices: [
          {
            title: "Newcomer Success Program",
            description: "A comprehensive guide to successful integration.",
            objectives: ["Settlement", "Career success"],
            points: ["Cultural navigation", "Networking"]
          }
        ]
      }
    ]
  }
};
