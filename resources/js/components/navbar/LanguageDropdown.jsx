import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex w-full text-xl  justify-center items-center gap-x-1.5 rounded-md border border-teal-500 px-4 py-2  font-semibold text-gray-900  ring-gray-300 hover:bg-teal-100"
          id="menu-button"
        >
           {i18n.language === "ar" ? "العربية" : "English"}
        <IoChevronDown
            className={`text-teal-800 transition-transform duration-200 transform ${
                open ? "rotate-180" : "rotate-0"
            }`}
        />
        </button>
      </div>

      {open && (
        <div
          className="absolute  right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5"
          role="menu"
        >
          <div className="py-1 " role="none">
            <button
              onClick={() => changeLanguage("en")}
              className="block w-full px-4 py-2 text-xl font-semibold text-gray-700 hover:bg-teal-100 text-left"
              role="menuitem"
            >
             English
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className="block w-full px-4 py-2  text-xl font-semibold text-gray-700 hover:bg-teal-100 text-left"
              role="menuitem"
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
