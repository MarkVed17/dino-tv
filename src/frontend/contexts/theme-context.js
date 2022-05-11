import { createContext, useContext, useState, useLayoutEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem("DINO_TV_THEME");

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useLayoutEffect(() => {
    localStorage.setItem("DINO_TV_THEME", theme);

    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

export { ThemeProvider, useTheme };
