import React from "react";
import { Progress } from "./ui/progress";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const timelineItems = [
	{
		date: "Jan 2020",
		title: "Enrolled in ITE College Central",
		description: "Nitec in Info-comm Technology",
	},
	{
		date: "Jan 2021",
		title: "Started internship at NCS Group",
		description: "Desktop Support Engineer",
	},
	{
		date: "Jul 2021",
		title: "Completed internship at NCS Group",
		description: "Desktop Support Engineer",
	},
	{
		date: "Feb 2022",
		title: "Graduated from ITE College Central",
		description: "Nitec in Info-comm Technology",
	},
	{
		date: "Apr 2022",
		title: "Enrolled in ITE College Central",
		description: "Higher Nitec in IT software applications development",
	},
	{
		date: "Apr 2023",
		title: "Stared internship at Singrow Pte Ltd",
		description: "Digital content developer",
	},
	{
		date: "Aug 2023",
		title: "Completed internship at Singrow Pte Ltd",
		description: "Digital content developer",
	},
	{
		date: "May 2024",
		title: "Graduated from ITE College Central",
		description: "Higher Nitec in IT software applications development",
	},
	{
		date: "Apr 2024",
		title: "Enrolled in Republic Polytechnic",
		description: "Diploma in Digital Design and Development",
	},
];

interface TimelineCardProps {
	date: string;
	title: string;
	description: string;
}

const TimelineCard = ({
	timelineItem: TimelineItem,
}: {
	timelineItem: TimelineCardProps;
}) => {
	return (
		<Card className="w-96">
			<CardHeader>
				<CardTitle>{TimelineItem.title}</CardTitle>
				<CardDescription>{TimelineItem.description}</CardDescription>
				<CardDescription>{TimelineItem.date}</CardDescription>
			</CardHeader>
		</Card>
	);
};

export const Timeline = () => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const [progress, setProgress] = React.useState(0);

	React.useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const ProgressObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const visibleRatio = entry.intersectionRatio;
						const progressPercent = visibleRatio * 100;

						setProgress(
							progressPercent < 95 ? Math.max(0, progressPercent - 5) : 100
						);
						if (progressPercent >= 95) {
							setProgress(100);
							ProgressObserver.disconnect();
						}
					}
				});
			},
			{ threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
		);

		ProgressObserver.observe(container);
		return () => ProgressObserver.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="justify-center flex gap-8 ">
			<div
				className={`flex items-center justify-center row-span-9 justify-self-end`}
			>
				<Progress value={progress} aria-orientation="vertical" />
			</div>
			<div className="flex flex-col gap-8">
				{timelineItems.map((item, index) => (
					<TimelineCard key={index} timelineItem={item} />
				))}
			</div>
		</div>
	);
};
