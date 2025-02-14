import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const NavBar = () => {
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/santatra-niaina-6855a3290/",
      "_blank",
      "noopener,noreferrer"
    );
    console.log("click LinkedIn");
  };
  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/santatra_niaina17?igsh=cWhwcm9vdmdrMjhm&utm_source=qr",
      "_blank",
      "noopener,noreferrer"
    );
    console.log("click Instagram");
  };
  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100014178306533",
      "_blank",
      "noopener,noreferrer"
    );
    console.log(
      "click https://www.facebook.com/profile.php?id=100014178306533"
    );
  };
  const handleGit = () => {
    window.open(
      "https://github.com/santatriniaina17",
      "_blank",
      "noopener,noreferrer"
    );
    console.log("click Git");
  };
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-xl font-bold border-2 rounded-4xl p-2 text-purple-400">
        SN
      </div>
      <div className="m-2 flex items-center justify-center gap-4 text-2xl ">
        <FaLinkedinIn
          onClick={handleLinkedIn}
          className="hover:text-purple-500 hover:scale-105 transition-transform duration-100"
        />
        <FaInstagram
          onClick={handleInstagram}
          className="hover:text-purple-500 hover:scale-105 transition-transform duration-100"
        />
        <FaFacebook
          onClick={handleFacebook}
          className="hover:text-purple-500 hover:scale-105 transition-transform duration-100"
        />
        <FaGithubSquare
          onClick={handleGit}
          className="hover:text-purple-500 hover:scale-105 transition-transform duration-100"
        />
      </div>
    </nav>
  );
};

export default NavBar;
