export const MapPinIcon = ({ color, className }: { color?: string; className?: string }) => (
	<svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
		<path d="M16.5 8.33333C16.5 14.1667 9 19.1667 9 19.1667C9 19.1667 1.5 14.1667 1.5 8.33333C1.5 6.34421 2.29018 4.43655 3.6967 3.03003C5.10322 1.62351 7.01088 0.833333 9 0.833333C10.9891 0.833333 12.8968 1.62351 14.3033 3.03003C15.7098 4.43655 16.5 6.34421 16.5 8.33333Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M9 10.8333C10.3807 10.8333 11.5 9.71404 11.5 8.33333C11.5 6.95262 10.3807 5.83333 9 5.83333C7.61929 5.83333 6.5 6.95262 6.5 8.33333C6.5 9.71404 7.61929 10.8333 9 10.8333Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

export default MapPinIcon;