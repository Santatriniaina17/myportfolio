import project1 from "../assets/face_reco.jpg";
import project2 from "../assets/gestion_de _projet.jpg";
import project3 from "../assets/icon.svg";
import project0 from "../assets/Mi_trade.png";

export const PROJECTS = [
  {
    title: "Mi-sera",
    image: project0,
    description:
      "Une applicatoin web basé sur les model de prédiction de prix et de tendance, plutot orienté Analyse de Données",
    technologies: ["Python", "scss", "Angular", "Django", "Posgresql"],
    link: "https://misera-depl.vercel.app/",
  },
  {
    title: "Institute Traking",
    image: project1,
    description:
      "Une application web basée sur la reconnaissance faciale, analysant des vidéos de surveillance, qu'elles soient préenregistrées ou en temps réel.",
    technologies: ["Python", "Tailwindcss", "React", "Django", "WAMP"],
  },
  {
    title: "Student Management",
    image: project2,
    description:
      "Une application desktop de gestion de projet sur mesure, permettant un suivi de l'avancement de chaque objectif spécifique en pourcentage.",
    technologies: ["XML", "Python", "PyQt5", "SQlite"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Un projet personnel de portfolio permettant d'exposer mes réalisations et travaux.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  },
];
