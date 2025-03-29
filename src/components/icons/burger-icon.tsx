export const BurgerIcon = ({ color, className }: { color?: string; className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
		<path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h15M3 5h15M3 15h15"></path>
	</svg>
);

export default BurgerIcon;