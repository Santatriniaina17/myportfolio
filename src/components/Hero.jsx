import myHead from "../assets/myHead.jpg";
import download from "../Document/CV-Santatriniaina Sarobidy RANDRIAMBOLOLONA.pdf";
import React from "react";

const Hero = () => {
  const handleDownload = () => {
    const fileUrl = { download };
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "CV-Santatriniaina Sarobidy RANDRIAMBOLOLONA.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Santatra Niaina
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Développeur FullStack
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              Je suis développeur avec une passion pour la creation
              d'expériences web fluide. J'aime relever des défis complexes et
              fournir des solutions numériques impactantes.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2 lg:p-8">
          <div className="flex justify-center p-2">
            <img
              className="rounded-[50%] w-[250px] h-[250px]"
              src={myHead}
              alt="alt"
            />
          </div>
          <button
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl text-transparent border-2 border-transparent hover:border-purple-500 hover:scale-105 transition-transform duration-300 rounded-xl p-3"
            onClick={handleDownload}
          >
            Télécharger CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
