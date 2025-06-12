import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

function Progress({
	className,
	value,
	...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
	return (
		<ProgressPrimitive.Root
			data-slot="progress"
			className={cn(
				"bg-primary/20 relative overflow-hidden rounded-full",
				props["aria-orientation"] === "vertical" ? "w-2 h-full" : "w-full h-2",
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot="progress-indicator"
				className="bg-primary h-full w-full flex-1 transition-all "
				style={{
					transform: `${
						props["aria-orientation"] === "vertical"
							? "translateY"
							: "translateX"
					}(-${100 - (value || 0)}%)`,
				}}
			/>
		</ProgressPrimitive.Root>
	);
}

export { Progress };
