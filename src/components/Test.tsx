import { useTheme } from "@/contexts/ThemeContext";

export const Test = () => {
	const { theme } = useTheme();
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-2xl font-bold mb-4">Current Theme</h1>
			<p className="text-lg">{theme}</p>
		</div>
	);
};
