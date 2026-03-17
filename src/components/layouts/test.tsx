"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { MainThemeNames, ThemeNames } from "@/constants/colors";

export default function TestComponent() {
  const s = useTheme();

  const { setTheme, resolvedTheme } = s;

  function handleChange(e: string) {
    console.log(e, s.themes);

    setTheme(e);
    console.log(e, s.theme, resolvedTheme);
    console.log(s.themes);
  }

  return (
    <Select onValueChange={handleChange}>
      <SelectTrigger className="w-45">
        <SelectValue defaultValue={s.theme} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {MainThemeNames.map((item, i) => (
            <SelectItem key={item + i} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
