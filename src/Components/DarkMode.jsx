import React from 'react';
import LightButton from '../assets/light-mode-button.png';
import DarkButton from '../assets/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  React.useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      <img
        src={theme === "light" ? LightButton : DarkButton}
        alt={theme === "light" ? "Light Mode Button" : "Dark Mode Button"}
        onClick={toggleTheme}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 z-10"
      />
    </div>
  );
};

export default DarkMode;




   