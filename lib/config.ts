export const getCanonicalUrl: string =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://maykelarias.tech";
export const defaultLang: string = "es";

