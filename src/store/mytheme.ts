import { create } from "zustand";

export type BrightnessMode = "light" | "dark" | "system";

interface ThemesControl {
  brightness: string;
  systemTheme: string;
  themeColor: string;
  theme: string;
}
type ThemeStoreState = ThemesControl & {
  changeStore: (val: Partial<ThemesControl>) => void;
};

export const useThemeStore = create<ThemeStoreState>((set) => ({
  brightness: "system",
  systemTheme: "dark",
  themeColor: "default",
  theme: "dark",
  changeStore: (val) => {
    set((state) => {
      console.log(val);

      return { ...state, ...val };
    });
  },
}));
