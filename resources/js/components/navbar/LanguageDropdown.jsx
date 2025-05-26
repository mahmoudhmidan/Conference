import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDown } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };

  return (
    <div className="relative">
      <div className="hidden md:inline-block text-left">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`inline-flex w-full justify-center items-center gap-x-1.5 rounded-md border border-teal-500 px-4 py-2 font-semibold ${
          i18n.language === 'ar' ? 'text-xl' : 'text-[14px]'
          } text-gray-900 ring-gray-300 hover:bg-teal-100`}
        >
          {i18n.language === "ar" ? "العربية" : "English"}
          <IoChevronDown
            className={`text-teal-800 transition-transform duration-200 transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>

     
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-4xl text-teal-800 p-2 rounded hover:bg-teal-100"
        >
          <MdLanguage />
        </button>
      </div>

    
      {open && (
        <div className="absolute left-0 z-40 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5">
          <div className="py-1">
            <button
              onClick={() => changeLanguage("en")}
              className={`block w-full px-4 py-2 font-semibold ${
                 i18n.language === 'ar' ? 'text-xl' : 'text-[14px]'
              } text-gray-700 hover:bg-teal-100 text-left`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("ar")}
              className={`block w-full px-4 py-2 font-semibold ${
                 i18n.language === 'ar' ? 'text-xl' : 'text-[14px]'
              } text-gray-700 hover:bg-teal-100 text-left`}
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
