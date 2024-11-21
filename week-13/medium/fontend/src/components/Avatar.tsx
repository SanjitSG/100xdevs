interface AvatarProps {
	size?: number;
}

const Avatar = ({ size = 5 }: AvatarProps) => {
	return (
		<div className={`h-${size}`}>
			<div
				className={`relative h-${size} w-${size} bg-gray-400 rounded-full p-1 flex justify-center items-center`}
			>
				<svg
					className={`h-${size} w-${size} text-gray-100}`}
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Avatar;
