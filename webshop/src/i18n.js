import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "view-details": "Look closer",
      "add-to-cart": "Add to cart",
      "admin": "Admin",
      "shops": "Our shops",
      "contact": "Contact with us",
      "cart": "To cart view",
      "login": "Log in",
      "signup": "Sign up",
    }
  },
  ee: {
    translation: {
      "view-details": "Vaata lähemalt",
      "add-to-cart": "Lisa ostukorvi",
      "admin": "Admin",
      "shops": "Meie poed",
      "contact": "Võta ühendust",
      "cart": "Ostukorvi",
      "login": "Logi sisse",
      "signup": "Registreeru",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;