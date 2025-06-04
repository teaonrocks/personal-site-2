// src/components/ThemeProvider.tsx
import React, { useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import type { Theme, ThemeContextType } from "../contexts/ThemeContext";

interface ThemeProviderProps {
	children: ReactNode;
	initialTheme?: Theme; // Optional: allow setting an initial theme via props
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
	children,
	initialTheme = "system", // Default initial theme
}) => {
	// Your original useState hook
	const [theme, setTheme] = useState<Theme>(initialTheme);

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setTheme(isDarkMode ? "dark" : "theme-light");
	}, []);

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	// Memoize the context value to prevent unnecessary re-renders
	// The object passed to `value` should have a stable identity or only change
	// when `theme` or `setTheme` actually changes.
	// `setTheme` from `useState` has a stable identity.
	const contextValue = useMemo((): ThemeContextType => {
		return {
			theme: theme,
			setTheme: setTheme, // Pass the setter function from useState
		};
	}, [theme, setTheme]); // Dependency array

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	);
};
