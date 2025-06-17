export const Logo = ({ className, ...props }: React.ComponentProps<"svg">) => {
	return (
		<svg
			id="Layer_2"
			data-name="Layer 2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 84.06 83.9"
			className={className}
		>
			<g id="Logo" data-name="Logo">
				<g>
					<path
						className="logo-fill"
						d="M84.06,83.9H0L42.1,1.2l8.12,15.94c-5.1,6.95-8.12,15.53-8.12,24.82,0,23.16,18.8,41.93,41.96,41.93Z"
					></path>
					<path
						className="logo-fill"
						d="M84.06,0v83.57L50.22,17.14C57.87,6.76,70.19,0,84.06,0Z"
					></path>
				</g>
			</g>
		</svg>
	);
};
