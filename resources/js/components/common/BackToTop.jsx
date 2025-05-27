import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-teal-600 w-10 h-10 hover:bg-teal-800 text-white p-3 rounded-full shadow-md transition-opacity duration-300"
      >
        <FaArrowUp/>
      </button>
    )
  );
}
