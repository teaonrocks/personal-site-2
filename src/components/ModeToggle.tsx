import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext, useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import type { Theme, ThemeContextType } from "@/contexts/ThemeContext";
import { ThemeProvider } from "./ThemeProvider";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => {
				theme === "dark" ? setTheme("theme-light") : setTheme("dark");
			}}
		>
			<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
