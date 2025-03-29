export const ArrowIcon = ({ color, className }: { color?: string; className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="14" height="8" fill="none" viewBox="0 0 14 8">
		<path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7 1 1 7"></path>
	</svg>
);

export default ArrowIcon;