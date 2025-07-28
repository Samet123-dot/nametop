import React from "react";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-primary dark:bg-gray-900 text-white py-4 shadow-lg transition-all">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-display font-bold text-2xl tracking-tight">
          <span className="text-accent">NameMC</span> Pro
        </h1>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
            className="hover:text-accent transition-colors text-lg"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-white dark:bg-gray-700 text-primary dark:text-yellow-400 shadow transition-all hover:scale-110"
            title={darkMode ? "Açık moda geç" : "Karanlık moda geç"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}