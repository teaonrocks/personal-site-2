import React from "react";
import { Progress } from "./ui/progress";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

const timelineItems = [
	{
		date: "Jan 2020 - Feb 2022",
		title: "ITE College Central",
		description: "Nitec in Info-comm Technology",
		extras: ["Member of ITE College Central Cuesports"],
	},
	{
		date: "Jan 2021 - Jul 2021",
		title: "Internship at NCS Group",
		description: "Desktop Support Engineer",
		extras: [
			"Provided technical support for employees across multiple departments",
			"Resolved hardware and software issues",
			"Assisted in migrating users to new laptops",
			"Assisted in setting up desks for hot-desking",
			"onboarded new employees with IT equipment",
			"offboarded employees by collecting IT equipment",
		],
	},
	{
		date: "Apr 2022 - May 2024",
		title: "ITE College Central",
		description: "Higher Nitec in IT Software Applications Development",
		extras: [
			"President of ITE College Central Cuesports",
			"Competed for ITE College Central in ARC College Challenge Cup 2022",
			"Competed for ITE College Central in Invictus 9-Ball 2022",
			"Competed for ITE College Central in ARC College Challenge Cup 1 and 2 2023",
		],
	},
	{
		date: "Apr 2023 - Aug 2023",
		title: "Internship at Singrow Pte Ltd",
		description: "Digital Content Developer",
		extras: [
			"Designed and developed responsive website using wix.com",
			"Created digital marketing materials and social media content",
			"Collaborated with design team to implement UI/UX improvements",
			"Attempted to build a new CMS for the company",
			"Managed content updates for company website and blog",
			"Assisted in school tours and events for the company",
		],
	},
	{
		date: "Apr 2024 - Present",
		title: "Republic Polytechnic",
		description: "Diploma in Digital Design and Development",
		extras: [
			"Director's Roll of Honour AY2024 Semester 1",
			"Director's Roll of Honour AY2024 Semester 2",
			"Participated in SCDF-Dell Hackathon 'Lifesavers' Innovation Challenge 2025",
			"Participated in DSTA Brainhack CODE_EXP 2025",
			"Participated in Mission X by Youth Corps Singapore",
		],
	},
];

interface TimelineCardProps {
	date: string;
	title: string;
	description: string;
	extras?: string[];
}

const TimelineCard = ({
	timelineItem,
}: {
	timelineItem: TimelineCardProps;
}) => {
	if (!timelineItem.extras) {
		return (
			<Card className="w-full max-w-96">
				<CardHeader>
					<CardTitle>{timelineItem.title}</CardTitle>
					<CardDescription>{timelineItem.description}</CardDescription>
					<CardDescription>{timelineItem.date}</CardDescription>
				</CardHeader>
			</Card>
		);
	}

	return (
		<>
			<div className="block md:hidden">
				<Dialog>
					<DialogTrigger asChild>
						<Card className="w-full max-w-96 cursor-pointer hover:bg-accent/50 active:scale-[0.98] transition-all duration-150 ring-1 ring-transparent hover:ring-primary/20">
							<CardHeader>
								<CardTitle>{timelineItem.title}</CardTitle>
								<CardDescription className="mb-4">
									{timelineItem.description}
								</CardDescription>
								<CardDescription className="mb-4">
									{timelineItem.date}
								</CardDescription>

								{/* Tech stack / Achievement preview */}
								<Badge variant="secondary">
									{timelineItem.extras.length} Contribution
									{timelineItem.extras.length !== 1 ? "s" : ""}
									<ChevronRight className="h-4 w-4" />
								</Badge>
							</CardHeader>
						</Card>
					</DialogTrigger>
					<DialogContent className="bg-card text-card-foreground w-[95vw] h-[85vh] max-w-none flex flex-col gap-0 rounded-xl border shadow-sm overflow-hidden p-1">
						<DialogHeader className="flex-shrink-0 px-6 py-6 border-b text-start">
							<DialogTitle className="leading-none font-semibold ">
								{timelineItem.title}
							</DialogTitle>
							<CardDescription className="mt-2">
								{timelineItem.description}
							</CardDescription>
							<CardDescription className="text-xs text-muted-foreground mt-1">
								{timelineItem.date}
							</CardDescription>
						</DialogHeader>

						<div className="flex-1 overflow-hidden flex flex-col">
							<CardContent className="flex-1 overflow-y-auto py-6">
								<ul className="space-y-4">
									{timelineItem.extras.map((extra, index) => (
										<li key={index} className="flex items-start gap-3">
											<div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
											<span className="text-sm leading-relaxed">{extra}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</div>
					</DialogContent>
				</Dialog>
			</div>

			{/* Desktop Version - Tabs */}
			<Card className="w-full max-w-96 hidden md:block">
				<Tabs defaultValue="overview" className="w-full">
					<CardHeader className="pb-3">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="contributions" className="relative">
								Contributions
								<Badge variant="outline" className="ml-2 h-5 text-xs">
									{timelineItem.extras.length}
								</Badge>
							</TabsTrigger>
						</TabsList>
					</CardHeader>

					<TabsContent value="overview" className="mt-0 p-0">
						<CardHeader className="pt-0">
							<CardTitle>{timelineItem.title}</CardTitle>
							<CardDescription>{timelineItem.description}</CardDescription>
							<CardDescription>{timelineItem.date}</CardDescription>
						</CardHeader>
					</TabsContent>

					<TabsContent value="contributions" className="mt-0 p-0">
						<CardHeader className="pt-0">
							<CardTitle>{timelineItem.title}</CardTitle>
							<CardDescription className="flex items-center gap-2">
								{timelineItem.extras.length} Contribution
								{timelineItem.extras.length !== 1 ? "s" : ""}
								<span className="text-muted-foreground">•</span>
								{timelineItem.date}
							</CardDescription>
						</CardHeader>
						<CardContent className="pt-0">
							<ul className="space-y-3">
								{timelineItem.extras.map((extra, index) => (
									<li key={index} className="flex items-start gap-3">
										<div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
										<span className="text-sm leading-relaxed">{extra}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</TabsContent>
				</Tabs>
			</Card>
		</>
	);
};

export const Timeline = () => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const createThresholds = () => {
			const thresholds = [];
			for (let i = 0; i <= 100; i += 2) {
				thresholds.push(i / 100);
			}
			return thresholds;
		};

		const ProgressObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const rect = entry.boundingClientRect;
					const viewportHeight = window.innerHeight;
					const elementHeight = rect.height;

					let progressPercent = 0;

					if (entry.isIntersecting) {
						const startPosition = viewportHeight;
						const endPosition = viewportHeight - elementHeight;

						const currentPosition = rect.top;
						const totalDistance = startPosition - endPosition;
						const traveledDistance = startPosition - currentPosition;

						progressPercent = Math.min(
							100,
							Math.max(0, (traveledDistance / totalDistance) * 100)
						);
					}

					setProgress(progressPercent > 98 ? 100 : progressPercent - 2);
					if (progressPercent >= 100) {
						ProgressObserver.disconnect();
					}
				});
			},
			{
				threshold: createThresholds(),
				rootMargin: "0px 0px -1px 0px",
			}
		);

		ProgressObserver.observe(container);
		return () => ProgressObserver.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="justify-center flex gap-16 w-full">
			<div>
				<Progress value={progress} aria-orientation="vertical" />
			</div>
			<div className="flex flex-col gap-8 w-full max-w-96">
				{timelineItems.map((item, index) => (
					<TimelineCard key={index} timelineItem={item} />
				))}
			</div>
		</div>
	);
};
