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

export default function SelectTheme() {
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
        setTheme(validateTheme())
    }

    useEffect(() => {
        const s = () => {
            const currentMode = localStorage.getItem("themecolor")
            if (currentMode) {
                setThemeColor(currentMode)
            } else {
                // localStorage.setItem("themecolor", "default")
                setThemeColor("default")
            }
            setTheme(validateTheme())
        }
        s()
    }, [])

    return (
        <Select
            onValueChange={handleChange}
            defaultValue={themeColor} >
            <SelectTrigger
                className="w-45"
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
