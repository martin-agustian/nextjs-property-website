export const GotoIcon = ({ color, className }: { color?: string; className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="none" viewBox="0 0 12 13">
		<path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 11.5 10-10m0 0H1m10 0v10"></path>
	</svg>
);

export default GotoIcon;