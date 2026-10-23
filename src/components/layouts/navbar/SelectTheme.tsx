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
import { useEffect, useState } from "react";
import validateTheme from "@/lib/validateTheme";
import { useThemeStore } from "@/store/mytheme";

export default function SelectTheme() {
    const store = useThemeStore()

    const [themeColor, setThemeColor] = useState(localStorage.getItem("themecolor") || "default")
    const { setTheme } = useTheme()
    // const s = useTheme();

    // const { setTheme, resolvedTheme } = s;

    function handleChange(v: string) {
        setThemeColor(v)
        if (v) {
            localStorage.setItem("themecolor", v);
            setThemeColor(v);
        }
        const newTheme = validateTheme()
        store.changeStore({ theme: newTheme })
        setTheme(newTheme)
    }

    useEffect(() => {
        const s = () => {
            const currentMode = localStorage.getItem("themecolor")
            let checkedColor = ""
            if (currentMode) {
                setThemeColor(currentMode)
                checkedColor = currentMode
            } else {
                // localStorage.setItem("themecolor", "default")
                setThemeColor("default")
                checkedColor = "default"
            }
            const newTheme = validateTheme()
            store.changeStore({ theme: newTheme, themeColor: checkedColor })
            setTheme(newTheme)
        }
        s()
    }, [])

    return (
        <Select
            onValueChange={handleChange}
            defaultValue={themeColor} >
            <SelectTrigger
                className="bg-primary/50"
                id="MainColorPicker"
            >
                <SelectValue />

            </SelectTrigger>
            <SelectContent >
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
