import React, { useState, useEffect, useRef } from "react";
import { LANGUAGES } from "../../config";
import './dropdown.css'; // Import du fichier CSS

const Dropdown = () => {
  const [currentLanguage, setCurrentLanguage] = useState("fr"); // Défaut en français
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang);
    setIsOpen(false);

    // Si la langue sélectionnée est "fr" et que l'URL est déjà "/"
    if (lang === currentLanguage) return;

    if (lang === "fr") {
      window.location.href = "/"; // Redirige vers la racine pour le français
    } else {
      window.location.href = `/${lang}`; // Redirige vers /en ou /autre_lang
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Vérification de la langue dans l'URL
    const pathLang = window.location.pathname.split("/")[1];
    if (pathLang === "") {
      // Si l'URL est juste "/", on redirige vers "/fr"
      window.location.href = "/fr";
      return;
    }

    const language = pathLang === "" ? "fr" : pathLang; // Par défaut, "fr" si pas de langue dans l'URL
    if (LANGUAGES.includes(language)) {
      setCurrentLanguage(language); // Met à jour la langue courante
    } else {
      setCurrentLanguage("fr"); // Définit "fr" comme langue par défaut si l'URL ne correspond à aucune langue
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown button */}
      <button
        className="honk-custom inline-flex justify-start items-center bg-transparent px-4 py-2 text-xl font-medium text-slate-400 focus:outline-none"
        onClick={toggleDropdown}
      >
        {currentLanguage}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8 9h8l-4 7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-20 origin-top-right rounded-md bg-zinc-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
      
          {LANGUAGES.map((lang) => (
            <div className="py-1" key={lang}>
              <button
                className="honk-custom text-slate-400 inline-block px-4 py-2 text-xl hover:bg-slate-800 w-full"
                onClick={() => handleLanguageChange(lang)}
              >
                {lang}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
