import * as React from "react";
import { ThemeContext, useTheme } from "@/contexts/ThemeContext";
export function Logo() {
	const { theme } = useTheme();

	if (theme === "dark") {
		return <img src="/logo_white.svg" alt="" className="h-[2rem] w-[2rem]" />;
	} else {
		return <img src="/logo_black.svg" alt="" className="h-[2rem] w-[2rem]" />;
	}
}
