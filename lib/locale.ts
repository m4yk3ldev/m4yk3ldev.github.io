
interface IDataLocaleStorage {
  Index: {
    title: string
  };
  MenuDesktop: {
    home: string;
    about: string;
  },
  "Hero": {
    title: string;
    description: string;
  }
}
interface IGetLocaleStorage {
  [locale: string]: IDataLocaleStorage
}
import es from "../i18n/es.json";
import en from "../i18n/en.json";
import pt from "../i18n/pt.json";

const localeStorage: IGetLocaleStorage = {
  "es": es,
  "pt": pt,
  "en": en
}

export const GetLocaleStorage = (locale: string = "es") => {
  return localeStorage[locale]
}
