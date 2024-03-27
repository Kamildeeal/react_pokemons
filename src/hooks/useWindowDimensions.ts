import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const [isMenuOpen, setIsHamburgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth >= 1024) {
        setIsHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    setIsHamburgerOpen((i) => !i);
  };

  return {
    isMobile,
    isMenuOpen,
    toggleMenu,
  };
}
