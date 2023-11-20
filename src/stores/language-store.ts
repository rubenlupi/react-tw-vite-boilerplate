import { create } from "zustand";

export enum Languages {
  english = "english",
  spanish = "spanish",
}

export interface LanguageStore {
  language: string;
  setLanguage: (lang: Languages) => void;
}

const useLanguageStore = create<LanguageStore>((set) => ({
  language: "english", // initial language
  setLanguage: (lang: Languages) => set({ language: lang }),
}));

export default useLanguageStore;
