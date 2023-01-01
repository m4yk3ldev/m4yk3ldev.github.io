interface IGetLocaleStorage {
  [locale: string]: {
    title: string;
  }
}

const localeStorage: IGetLocaleStorage = {
  "es": {
    title: "Hola, soy Maykel Arias Torres"
  },
  "pt": {
    title: "Oi, eu sou Maykel Arias Torres"
  },
  "en": {
    title: "Hello, I am Maykel Arias Torres"
  }
}

export const GetLocaleStorage = (locale: string = "es") => {
  return localeStorage[locale]
}
