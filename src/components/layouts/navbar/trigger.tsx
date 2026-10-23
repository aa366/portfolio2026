"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import validateTheme from "@/lib/validateTheme";
import { BrightnessMode, useThemeStore } from "@/store/mytheme";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const brightnessOptions = ["light", "dark", "system"] as const;


export function ModeToggle() {
  const { setTheme, systemTheme } = useTheme()
  const [brightness, setBrightness] = useState<BrightnessMode>("light");
  const [isOpen, setIsOpen] = useState(false)
  const store = useThemeStore()

  function handleChange(e: React.MouseEvent<HTMLDivElement, MouseEvent>, mode: BrightnessMode) {
    e.preventDefault()

    if (mode) {
      localStorage.setItem("brightness", mode);
      setBrightness(mode);
    }
    setIsOpen(false)
    const newTheme = validateTheme()
    store.changeStore({ theme: newTheme, brightness: mode })
    setTheme(newTheme)
  }

  useEffect(() => {
    const s = () => {
      const currentMode = localStorage.getItem("brightness")
      localStorage.setItem("systemTheme", systemTheme ?? "dark")
      let checkedBrightness = ""
      if (
        currentMode === "light" ||
        currentMode === "dark" ||
        currentMode === "system"
      ) {
        checkedBrightness = currentMode
        setBrightness(currentMode)
      } else {
        // localStorage.setItem("brightness", "system")
        checkedBrightness = "system"
        setBrightness("system")
      }
      const newTheme = validateTheme()
      store.changeStore({ theme: newTheme, brightness: checkedBrightness, systemTheme: systemTheme ?? "dark" })
      setTheme(newTheme)

    }
    s()
  }, [])

  return (
    <DropdownMenu open={isOpen}>
      <DropdownMenuTrigger
        asChild
        onClick={() => setIsOpen(true)}>
        <Button variant="outline" className=" ">
          {brightness}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        {brightnessOptions.map((opt) => (
          <DropdownMenuItem
            key={opt + "-Brightness"}
            onClick={(e) => handleChange(e, opt)}>
            {opt}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
