import { initReactI18next } from "react-i18next";
import Cookies from "universal-cookie";
import i18n from "i18next";

// Translation files
import en from "./translations/en.json";
import hr from "./translations/hr.json";

const cookies = new Cookies();

const resources = {
	en: {
		translation: en,
	},
	hr: {
		translation: hr,
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: cookies.get("lang") || "en",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
