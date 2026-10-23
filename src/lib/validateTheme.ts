import { ThemeNames } from "@/constants/colors";
import { UseThemeProps } from "next-themes";

export default function validateTheme(): string {
  const color = localStorage.getItem("themecolor");
  const brightness = localStorage.getItem("brightness");
  const systemTheme = localStorage.getItem("systemTheme");

  if (color === "default") {
    if (brightness === "light") {
      return "light";
    } else if (brightness === "dark") {
      return "dark";
    }
    return "system";
  }

  if (
    brightness === "light" ||
    (systemTheme === "light" && brightness != "dark")
  ) {
    return color ?? "system";
  } else if (brightness === "dark" || systemTheme === "dark") {
    const darkColor = color + "-dark";
    return color ? darkColor : "system";
  }

  return "system";
}
