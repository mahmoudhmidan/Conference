"use client";
import ContactForm from "./contact_us/ContactForm";
import Footer from "./common/Footer";
import { useEffect, useState } from "react";
import Landing from "./landing/Landing";
import NavigationBar from "./common/NavigationBar";


export default  function Home() {
  
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main  className=" flex flex-col  justify-between min-h-screen">
      <NavigationBar />
      <Landing />

      <div id="contact" className="py-1 text-center">
        <h2 className="page text-3xl font-bold">Contact Us</h2>
        <div className="mt-4"><ContactForm/></div>
        {/* <ContactForm/> */}
      </div>

      {/* Footer */}

      <footer>
        <Footer />
      </footer>

      {showScrollButton && (
        <button
          className="fixed bottom-10 right-10 text-white px-4 py-4 rounded-full shadow-lg "
          onClick={scrollToTop}
          style={{
            backgroundColor: "var(--primary-color)",
            transition: "background-color 0.3s",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </main>
  );
}
