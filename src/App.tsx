import { ModeToggle } from "./components/ModeToggle";
import { ThemeProvider } from "./components/ThemeProvider";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import { Test } from "./components/Test";

export const App = () => {
	return (
		<ThemeProvider>
			<div className="w-full p-4 flex justify-between items-center">
				<div>
					<Logo />
				</div>
				<Nav />
				<ModeToggle />
			</div>
			<Test />
		</ThemeProvider>
	);
};
