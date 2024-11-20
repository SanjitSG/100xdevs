const Avatar = () => {
	return (
		<div className="h-4">
			<div className="relative w-4 h-4 bg-gray-400 rounded-full p-1 flex justify-center items-center">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					className="h-4 w-4 text-gray-100  "
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Avatar;
