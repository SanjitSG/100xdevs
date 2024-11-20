import Avatar from "./Avatar";

const BlogCard2 = () => {
	return (
		<div className="m-2 p-3 w-2/3 h-auto border">
			<div className="flex space-x-2 items-center h-4">
				<Avatar />
				<div className="text-xs uppercase text-slate-600 font-medium">
					Sanjit SG
				</div>
				<div className="text-slate-200">|</div>
				<div className="text-xs text-slate-500  font-light">25-Nov-24</div>
			</div>
			<div className="flex p-3">
				<div className="w-7/10 pr-4">
					<h2 className="font-bold text-xl">
						It happened on Medium: September 2024 roundup
					</h2>
					<p className="text-sm text-gray-700">
						Discussion-sparking subject lines, potent quotables, and new
						publications to follow.
					</p>
				</div>
				<div className="w-3/10 h-28">
					<img
						className=" w-full h-full object-cover rounded-xl border"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
						alt="image-description"
					/>
				</div>
			</div>
			<div className="flex justify-between  mt-3">
				<p className="text-xs text-gray-400">3 min read</p>
				<div className="">
					<div className="flex justify-center items-center space-x-3 ">
						<svg
							className="w-3 h-3 text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 18"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
							/>
						</svg>
						<p className="text-xs font-medium text-gray-400">...</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard2;
