// src/components/BlogComingSoon.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function BlogComingSoon() {
	return (
		<div className="min-h-[90vh] bg-background flex items-center justify-center p-6">
			<Card className="w-full max-w-lg mx-auto text-center">
				<CardHeader>
					<div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
						<BookOpen className="h-8 w-8 text-primary" />
					</div>
					<CardTitle className="text-2xl font-bold">Blog Coming Soon</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<p className="text-muted-foreground">
						I'm working on my blog where I'll share insights about web
						development, project breakdowns, and tech tutorials. Stay tuned!
					</p>
					<Button asChild>
						<a href="/" className="flex items-center gap-2">
							<ArrowLeft className="h-4 w-4" />
							Back to Home
						</a>
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
