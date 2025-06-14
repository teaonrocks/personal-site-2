import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export const Achievements = () => {
	return (
		<Tabs defaultValue="awards" className="bg-card rounded-xl border p-6 w-96">
			<TabsList>
				<TabsTrigger value="awards">Awards</TabsTrigger>
				<TabsTrigger value="contributions">Contributions</TabsTrigger>
			</TabsList>
			<TabsContent value="awards">
				AY2024 Semester 1 Director's Roll of Honour
				<br />
				AY2024 Semester 2 Director's Roll of Honour
			</TabsContent>
			<TabsContent value="contributions">
				President of ITE College Central Cuesports
			</TabsContent>
		</Tabs>
	);
};
