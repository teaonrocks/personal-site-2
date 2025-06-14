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
		date: "Jan 2020 - Feb 2022",
		title: "ITE College Central",
		description: "Nitec in Info-comm Technology",
	},
	{
		date: "Jan 2021 - Jul 2021",
		title: "Internship at NCS Group",
		description: "Desktop Support Engineer",
	},
	{
		date: "Apr 2022 - May 2024",
		title: "ITE College Central",
		description: "Higher Nitec in IT software applications development",
	},
	{
		date: "Apr 2023 - Aug 2023",
		title: "Internship at Singrow Pte Ltd",
		description: "Digital content developer",
	},
	{
		date: "Apr 2024 - Present",
		title: "Republic Polytechnic",
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

		// Create more granular thresholds
		const createThresholds = () => {
			const thresholds = [];
			for (let i = 0; i <= 100; i += 2) {
				// Every 2% instead of 1%
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

						console.log(
							`Start: ${startPosition}, End: ${endPosition}, Current: ${currentPosition}, Total: ${totalDistance}, Traveled: ${traveledDistance}`
						);
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
				rootMargin: "0px 0px -1px 0px", // Slight margin to ensure detection
			}
		);

		ProgressObserver.observe(container);
		return () => ProgressObserver.disconnect();
	}, []);

	return (
		<div ref={containerRef} className="justify-center flex gap-16 ">
			<div className={`flex items-center justify-center justify-self-end`}>
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
