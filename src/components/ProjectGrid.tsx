"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Github, ChevronRight } from "lucide-react";
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
	id: string;
	title: string;
	description: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	longDescription: string;
	keyFeatures?: string[];
}

const mockProjects: Project[] = [
	{
		id: "one-day-at-a-time",
		title: "One Day At A Time (ODAT)",
		description:
			"A real-time, Kahoot-style web app I developed for 'One Day At A Time,' a poverty simulation experience by Youth Corps, enhancing immersion from its Google Sheets format.",
		technologies: ["React", "Next.js", "Firebase", "Tailwind CSS", "Shadcn/UI"],
		githubUrl: "https://github.com/teaonrocks/odat",
		longDescription:
			"The 'One Day At A Time' (ODAT) App is a personal volunteer project that originated from my participation in Mission X by Youth Corps' insightful poverty simulation, which they named 'One Day At A Time' and conducted via Google Sheets. Recognizing the potential for greater immersion, I developed this web application to transform their static, spreadsheet-based exercise into a dynamic, real-time, multi-participant experience akin to Kahoot. The ODAT App aims to foster deeper empathy and understanding for the daily challenges faced by low-income single parents, offering engaging scenarios and individualized tracking in a far more interactive format. Built with Next.js, React, Firebase, Tailwind CSS, and Shadcn/UI, it provides a responsive, scalable, and cost-effective platform to make this crucial educational experience even more impactful.",
		keyFeatures: [
			"Enhanced Immersion: Transforms a static, Google Sheets-based simulation into a dynamic, real-time web application.",
			"Kahoot-Style Interaction: Gamified approach for increased user engagement and accessibility, inspired by a familiar format.",
			"Individualized Tracking: Monitors each participant's decisions and outcomes throughout the simulation for personalized learning.",
			"Comprehensive Scenarios: Presents realistic challenges faced by low-income single parents.",
			"Responsive Design: Ensures optimal usability across various devices and screen sizes.",
			"Scalable & Cost-Effective: Built with modern web technologies for efficient performance and deployment.",
		],
	},
	{
		id: "hima-discord-bots-api",
		title: "HIMA Discord Bots and SQLite API",
		description:
			"Discord bots and API for a high school-themed NFT project, managing attendance, points, and a shop system using PyCord, FastAPI, and SQLite.",
		technologies: ["Python", "PyCord", "FastAPI", "SQLite"],
		githubUrl: "https://github.com/teaonrocks/hima-discord",
		longDescription:
			"This project integrates Discord bots with a FastAPI and SQLite backend for a high school-themed NFT project. Built with PyCord, the system features an Attendance Bot for daily check-ins and leaderboards, a Points Bot for interactive rewards (with NFT-based multipliers), and a Shop Bot for in-platform purchases like attendance streak fixes or NFT giveaway roles. It showcases a comprehensive Discord-based ecosystem for an NFT community.",
		keyFeatures: [
			"Discord Bot Suite: Three bots (Attendance, Points, Shop) for varied NFT community functionalities.",
			"Attendance Tracking: Daily check-ins, streak tracking, and leaderboard via the Attendance Bot.",
			"Interactive Point System: Points Bot rewards users for correct answers, with NFT-based multipliers.",
			"In-Platform Economy: Shop Bot allows spending points on items and NFT giveaway roles.",
			"FastAPI Backend: Manages bot data and interactions.",
			"SQLite Database: Efficient data storage for the project.",
			"PyCord Framework: Facilitates seamless Discord integration for bots.",
		],
	},

	{
		id: "hima-nft-generator",
		title: "HIMA High School NFT Generative Art & Metadata System",
		description:
			"Automated system for generating unique HIMA High School NFT art and metadata using probabilistic traits, layered images, and IPFS.",
		technologies: [
			"Python",
			"Pillow (PIL)",
			"SQLite",
			"JavaScript",
			"Pinata API",
			"IPFS",
		],
		githubUrl: "https://github.com/teaonrocks/hima-art-gen",
		longDescription:
			"This project builds generative NFT collections for 'HIMA High School' by automating digital asset creation. It combines visual traits based on rarity probabilities using a Python backend for DNA generation and image composition (Pillow). SQLite manages unique trait combinations. Integration with Pinata API handles IPFS storage, and dynamic metadata generation. A JavaScript component defines rarity distributions, and the system supports targeted NFT re-generation for quality control or adjustments.",
		keyFeatures: [
			"Probabilistic Trait Generation: Dynamically generates unique NFT 'DNA' based on weighted probabilities.",
			"Layered Image Composition: Programmatically combines transparent image layers for high-quality NFT artwork.",
			"Unique DNA Management: Uses SQLite to prevent duplicate trait combinations.",
			"IPFS Integration: Automatically pins generated NFT images to IPFS via Pinata.",
			"Automated Metadata Generation: Creates standard JSON metadata files for each NFT.",
			"Modular Trait Definitions: JavaScript file defines trait variations and rarity probabilities.",
			"Targeted NFT Re-generation: Identifies and re-processes NFTs based on specific trait criteria.",
		],
	},

	{
		id: "cardano-nft-minter",
		title: "Cardano NFT Automated Minting & Refund System",
		description:
			"Automated Python script for Cardano NFT drops: handles payment validation, metadata, minting/refunds, and on-chain submission.",
		technologies: ["Python", "Cardano CLI", "SQLite"],
		githubUrl: "https://github.com/hima-minter",
		longDescription:
			"Automates Cardano NFT drops by monitoring payments, validating against prices (including discounts), and generating NFT metadata. It constructs, signs, and submits minting transactions for valid payments, or refunds for invalid ones. Configurable via environment variables and uses SQLite for tracking successful mints, ensuring efficient and robust distribution.",
		keyFeatures: [
			"Automated Payment Validation: Monitors and validates incoming ADA payments.",
			"Whitelist Discounts: Supports discounted mints for eligible addresses.",
			"Dynamic Metadata: Generates unique NFT metadata JSON files.",
			"Automated Transactions: Builds minting or refund transactions.",
			"Secure On-chain Submission: Signs and submits transactions to Cardano.",
			"Database Tracking: Records successful mints in SQLite.",
			"File Management: Archives metadata for minted NFTs.",
		],
	},
	{
		id: "5",
		title: "icedtea.dev",
		description:
			"My boring portfolio website (2023), `icedtea.dev`, built with Astro and Tailwind, inpsired by vexxel.",
		technologies: ["Astro", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
		liveUrl: "https://icedtea.archerchua.com",
		githubUrl: "https://github.com/teaonrocks/icedtea.dev",
		longDescription:
			"My personal portfolio website, `icedtea.dev`, built with Astro and Tailwind, featuring a minimalist yet distinctive design inspired by Vexxel.",
		keyFeatures: [
			"Clean & Minimalist Design",
			"Built with Astro",
			"Styled with Tailwind CSS",
			"Responsive Layout",
		],
	},
	{
		id: "6",
		title: "archerchua.com",
		description:
			"My modern portfolio website (2025), `archerchua.com`, built with Astro, React, TailwindCSS, ShadCN/UI and TypeScript.",
		technologies: [
			"Astro",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"ShadCN/UI",
			"Framer Motion",
		],
		liveUrl: "https://archerchua.com",
		githubUrl: "https://github.com/teaonrocks/archerchua.com",
		longDescription:
			"Modern portfolio website built with Astro for optimal performance, featuring interactive animations and responsive design.",
		keyFeatures: [
			"Responsive Design for All Devices",
			"Dark Mode Support",
			"Fast Loading Times",
			"Accessible Design",
		],
	},
];

export default function ProjectsGrid() {
	const [expandedProject, setExpandedProject] = useState<string | null>(null);
	const [gridHeight, setGridHeight] = useState<number>(0);
	const gridRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Measure grid height for desktop expansion
	useEffect(() => {
		const measureHeight = () => {
			if (containerRef.current) {
				const height = containerRef.current.offsetHeight;
				setGridHeight(height);
			}
		};

		measureHeight();
		window.addEventListener("resize", measureHeight);
		return () => window.removeEventListener("resize", measureHeight);
	}, []);

	// Handle click outside for desktop
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				gridRef.current &&
				!gridRef.current.contains(event.target as Node) &&
				expandedProject
			) {
				setExpandedProject(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [expandedProject]);

	// Handle escape key
	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape" && expandedProject) {
				setExpandedProject(null);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [expandedProject]);

	const handleProjectClick = (projectId: string) => {
		setExpandedProject(expandedProject === projectId ? null : projectId);
	};

	const expanded = mockProjects.find((p) => p.id === expandedProject);

	return (
		<div className="w-full max-w-7xl mx-auto p-6">
			<div ref={gridRef} className="relative">
				{/* Main Grid Container */}
				<div
					ref={containerRef}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					<AnimatePresence mode="wait">
						{(!expandedProject || window.innerWidth < 1024) &&
							mockProjects.map((project) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.2 }}
								>
									<ProjectCard
										project={project}
										onClick={() => handleProjectClick(project.id)}
									/>
								</motion.div>
							))}
						{/* Desktop: Keep invisible grid items to maintain layout */}
						{expandedProject &&
							window.innerWidth >= 1024 &&
							mockProjects.map((project) => (
								<div key={`spacer-${project.id}`}>
									<ProjectCard
										project={project}
										onClick={() => {}}
										isInvisible={true}
									/>
								</div>
							))}
					</AnimatePresence>
				</div>

				{/* Desktop: Grid Expansion - Hidden on mobile/tablet */}
				<div className="hidden lg:block">
					<AnimatePresence>
						{expandedProject && expanded && gridHeight > 0 && (
							<motion.div
								key="expanded-overlay"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.2, ease: "easeOut" }}
								className="absolute top-0 left-0 right-0 z-20"
								style={{ height: gridHeight }}
							>
								<ExpandedProject
									project={expanded}
									onClose={() => setExpandedProject(null)}
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

// Individual Project Card Component
function ProjectCard({
	project,
	onClick,
	isInvisible = false,
}: {
	project: Project;
	onClick: () => void;
	isInvisible?: boolean;
}) {
	return (
		<>
			{/* Desktop Card */}
			<div className="hidden lg:block h-full">
				<motion.div
					whileHover={!isInvisible ? { y: -8, scale: 1.02 } : {}}
					whileTap={!isInvisible ? { scale: 0.98 } : {}}
					transition={{ duration: 0.2 }}
					className={`h-full ${isInvisible ? "invisible" : ""}`}
				>
					<Card
						className={`h-full transition-all duration-300 ${
							!isInvisible ? "cursor-pointer hover:shadow-xl group" : ""
						}`}
						onClick={onClick}
					>
						<CardContent className="p-0 h-full">
							<div className="flex flex-col h-full">
								<div className="p-4 flex-1 flex flex-col">
									<h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
										{project.title}
									</h3>
									<p className="text-muted-foreground text-sm mb-3 flex-1">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-1">
										{project.technologies.slice(0, 3).map((tech) => (
											<span
												key={tech}
												className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
											>
												{tech}
											</span>
										))}
										{project.technologies.length > 3 && (
											<span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
												+{project.technologies.length - 3}
											</span>
										)}
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>

			{/* Mobile/Tablet Card with Dialog */}
			<div className="block lg:hidden ">
				<Dialog>
					<DialogTrigger asChild>
						<Card className="w-full cursor-pointer hover:bg-accent/50 active:scale-[0.98] transition-all duration-150 ring-1 ring-transparent hover:ring-primary/20">
							<CardHeader>
								<CardTitle className="text-lg">{project.title}</CardTitle>
								<CardDescription className="mb-4">
									{project.description}
								</CardDescription>

								{/* Tech stack preview */}
								<div className="flex flex-wrap gap-1 mb-4">
									{project.technologies.slice(0, 2).map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
										>
											{tech}
										</span>
									))}
									{project.technologies.length > 2 && (
										<span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
											+{project.technologies.length - 2} more
										</span>
									)}
								</div>
							</CardHeader>
						</Card>
					</DialogTrigger>
					<DialogContent className="bg-card text-card-foreground w-[95vw] h-[85vh] max-w-none flex flex-col gap-0 rounded-xl border shadow-sm overflow-hidden p-1 ">
						<DialogHeader className="flex-shrink-0 px-6 py-6 border-b text-start">
							<DialogTitle className="leading-none font-semibold text-xl">
								{project.title}
							</DialogTitle>
							<CardDescription className="mt-2">
								{project.description}
							</CardDescription>

							{/* Action buttons */}
							<div className="flex gap-3 mt-4">
								{project.liveUrl && (
									<Button asChild size="sm">
										<a
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<ExternalLink className="h-4 w-4" />
											View Live
										</a>
									</Button>
								)}
								{project.githubUrl && (
									<Button variant="outline" asChild size="sm">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2"
										>
											<Github className="h-4 w-4" />
											View Code
										</a>
									</Button>
								)}
							</div>
						</DialogHeader>

						<div className="flex-1 overflow-hidden flex flex-col">
							<CardContent className="flex-1 overflow-y-auto py-6">
								<div className="space-y-6">
									<div>
										<h3 className="font-semibold mb-3 text-lg">
											About This Project
										</h3>
										<p className="text-muted-foreground leading-relaxed text-sm">
											{project.longDescription}
										</p>
									</div>

									{/* Technologies */}
									<div>
										<h3 className="font-semibold mb-3 text-lg">
											Technologies Used
										</h3>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className="bg-primary/10 text-primary rounded-lg font-medium border border-primary/20 px-2 py-1 text-sm"
												>
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Key Features */}
									{project.keyFeatures && (
										<div>
											<h3 className="font-semibold mb-3 text-lg">
												Key Features
											</h3>
											<ul className="space-y-3">
												{project.keyFeatures.map((feature, index) => (
													<li key={index} className="flex items-start gap-3">
														<div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
														<span className="text-sm leading-relaxed text-muted-foreground">
															{feature}
														</span>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</CardContent>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
}

// Expanded Project View Component (Desktop only)
function ExpandedProject({
	project,
	onClose,
}: {
	project: Project;
	onClose: () => void;
}) {
	return (
		<Card className="h-full w-full shadow-2xl overflow-hidden border-2">
			<CardHeader className="flex flex-col gap-2">
				<div className="flex justify-between w-full">
					<CardTitle>
						<h2 className="font-bold text-2xl xl:text-3xl">{project.title}</h2>
					</CardTitle>
					<CardAction>
						<Button
							variant="ghost"
							size="sm"
							onClick={onClose}
							className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive h-10 w-10 p-0"
						>
							<X className="h-5 w-5" />
						</Button>
					</CardAction>
				</div>
				<CardAction>
					<div className="flex gap-3">
						{project.liveUrl && (
							<Button asChild className="flex-1 sm:flex-none">
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="flex items-center gap-2"
								>
									<ExternalLink className="h-4 w-4" />
									View Live
								</a>
							</Button>
						)}
						{project.githubUrl && (
							<Button variant="outline" asChild className="flex-1 sm:flex-none">
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									onClick={(e) => e.stopPropagation()}
									className="flex items-center gap-2"
								>
									<Github className="h-4 w-4" />
									View Code
								</a>
							</Button>
						)}
					</div>
				</CardAction>
			</CardHeader>
			<CardContent className="h-full overflow-auto">
				<div className="flex flex-col h-full">
					<div className="flex-1 overflow-auto">
						<div className="space-y-6">
							<div>
								<h3 className="font-semibold mb-3 text-xl">
									About This Project
								</h3>
								<p className="text-muted-foreground leading-relaxed text-base">
									{project.longDescription}
								</p>
							</div>

							{/* Technologies */}
							<div>
								<h3 className="font-semibold mb-3 text-xl">
									Technologies Used
								</h3>
								<div className="flex flex-wrap gap-2">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="bg-primary/10 text-primary rounded-lg font-medium border border-primary/20 px-3 py-2 text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Key Features */}
							{project.keyFeatures && (
								<div>
									<h3 className="font-semibold mb-3 text-xl">Key Features</h3>
									<ul className="space-y-2 text-muted-foreground text-base">
										{project.keyFeatures.map((feature, index) => (
											<li className="flex items-center gap-2" key={index}>
												<div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
												{feature}
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
