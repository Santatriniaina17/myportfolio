import project1 from "../assets/face_reco.jpg";
import project2 from "../assets/gestion_de _projet.jpg";
import project3 from "../assets/portfolio.jpg";

export const PROJECTS = [
  {
    title: "Global Traking",
    image: project1,
    description:
      "Une application web basée sur la reconnaissance faciale, analysant des vidéos de surveillance, qu'elles soient préenregistrées ou en temps réel.",
    technologies: ["Python", "Tailwindcss", "React", "Django", "WAMP"],
  },
  {
    title: "Gestion De Projet",
    image: project2,
    description:
      "Une application web de gestion de projet sur mesure, permettant un suivi de l'avancement de chaque objectif spécifique en pourcentage.",
    technologies: ["HTML", "Bootsrap", "Angular", "SpringBoot", "Oracle"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Un projet personnel de portfolio permettant d'exposer mes réalisations et travaux.",
    technologies: ["HTML", "CSS", "React", "Tailwindcss"],
  },
];
