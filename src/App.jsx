import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useThemeStore } from "@/store/useThemeStore";
import AppRouter from "@/router";
import { Toaster } from "sonner";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <AppRouter />
      </AnimatePresence>
      <Toaster
        richColors
        closeButton
        position="top-right"
      />
    </BrowserRouter>
  );
}

export default App;