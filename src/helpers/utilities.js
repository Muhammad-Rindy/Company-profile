import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScroolToTop({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return children;
}
