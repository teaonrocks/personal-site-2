"use client";

import * as React from "react";

import {
	CircleCheckIcon,
	CircleHelpIcon,
	CircleIcon,
	Github,
	Linkedin,
	Twitter,
	Menu,
} from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function Nav() {
	const [isSheetOpen, setIsSheetOpen] = React.useState(false);
	return (
		<>
			<NavigationMenu viewport={false} className="md:block hidden mr-auto">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Home</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
											href="/"
										>
											<div className="mt-4 mb-2 text-lg font-medium">
												Archer Chua
											</div>
											<p className="text-muted-foreground text-sm leading-tight">
												Pragmatic by Program.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="#introduction" title="Introduction">
									I am a student with a passion for programming and technology.
								</ListItem>
								<ListItem href="#experience" title="Experience">
									Education, interships, and work experience.
								</ListItem>
								<ListItem href="#projects" title="Projects">
									Personal projects, School projects, and more.
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuLink
							asChild
							className={navigationMenuTriggerStyle()}
						>
							<a href="/blog">Blog</a>
						</NavigationMenuLink>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger>Socials</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[200px] gap-4">
								<li>
									<NavigationMenuLink asChild>
										<a
											href="https://github.com/teaonrocks"
											className="flex-row items-center gap-2"
										>
											<Github />
											GitHub
										</a>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<a
											href="https://www.linkedin.com/in/archer-chua-4007401a2"
											className="flex-row items-center gap-2"
										>
											<Linkedin />
											LinkedIn
										</a>
									</NavigationMenuLink>
									<NavigationMenuLink asChild>
										<a
											href="https://x.com/teaonrocks"
											className="flex-row items-center gap-2"
										>
											<Twitter />
											Twitter
										</a>
									</NavigationMenuLink>
								</li>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className="md:hidden ml-auto">
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Open navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader>
							<SheetTitle>Archer Chua</SheetTitle>
							<SheetDescription>Pragmatic by Program</SheetDescription>
						</SheetHeader>
						<nav className="flex flex-col gap-4 mt-6">
							{/* Home Section using Accordion */}
							<Accordion type="single" collapsible className="w-full">
								{/* Blog Link */}
								<AccordionItem value="item-1" className="p-4">
									<a
										href="/blog"
										onClick={() => setIsSheetOpen(false)} // Close sheet on click
										className="flex-1 items-center justify-between py-4 font-medium transition-all hover:underline data-[state=open]:underline [&[data-state=open]>svg]:rotate-180 text-lg"
									>
										Blog
									</a>
								</AccordionItem>

								{/* Socials Section using Accordion */}
								<AccordionItem value="item-2" className="p-4">
									<AccordionTrigger className="text-lg font-medium hover:no-underline">
										Socials
									</AccordionTrigger>
									<AccordionContent>
										<ul className="flex flex-col gap-2 pl-4">
											{" "}
											{/* Added padding */}
											<li>
												<a
													href="https://github.com/teaonrocks"
													onClick={() => setIsSheetOpen(false)} // Close sheet on click
													className="flex items-center gap-2 text-md font-medium text-muted-foreground hover:text-primary"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Github className="h-4 w-4" />
													GitHub
												</a>
											</li>
											<li>
												<a
													href="https://www.linkedin.com/in/archer-chua-4007401a2"
													onClick={() => setIsSheetOpen(false)} // Close sheet on click
													className="flex items-center gap-2 text-md font-medium text-muted-foreground hover:text-primary"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Linkedin className="h-4 w-4" />
													LinkedIn
												</a>
											</li>
											<li>
												<a
													href="https://x.com/teaonrocks"
													onClick={() => setIsSheetOpen(false)} // Close sheet on click
													className="flex items-center gap-2 text-md font-medium text-muted-foreground hover:text-primary"
													target="_blank"
													rel="noopener noreferrer"
												>
													<Twitter className="h-4 w-4" />
													Twitter
												</a>
											</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink asChild>
				<a href={href}>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
}
