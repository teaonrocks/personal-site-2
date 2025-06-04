// src/contexts/ThemeContext.js
import React from "react";

export type Theme = "theme-light" | "dark" | "system";
export interface ThemeContextType {
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
const defaultContextState: ThemeContextType = {
	theme: "system",
	setTheme: () => {
		console.warn("setTheme called without a ThemeProvider");
	},
}; // Default theme value
// Create a context with a default value (e.g., 'light' theme)
export const ThemeContext =
	React.createContext<ThemeContextType>(defaultContextState); // Default value

export const useTheme = () => {
	const context = React.useContext(ThemeContext);
	if (context === undefined) {
		// This check is more relevant if you initialize createContext with `undefined`
		// instead of a defaultState object. With defaultState, it won't be undefined.
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
