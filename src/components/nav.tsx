"use client";

import * as React from "react";

import {
	CircleCheckIcon,
	CircleHelpIcon,
	CircleIcon,
	Github,
	Linkedin,
	Twitter,
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

export function Nav() {
	return (
		<NavigationMenu viewport={false}>
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
							<ListItem href="#intro" title="Introduction">
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
					<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
						<a href="/docs">Blog</a>
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
										href="www.linkedin.com/in/archer-chua-4007401a2"
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
