import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Reset scroll to the top on every route change (the nav is fixed, so pages
// should always start at the top rather than inheriting the previous scroll).
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
