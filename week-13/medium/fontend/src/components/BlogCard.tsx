import React from "react";
import Avatar from "./Avatar";

type Blog = {
	id: string;
	createdAt: Date;
	published?: boolean;
	title: string;
	content: string;
	author: {
		name: string | null;
	};
};

const BlogCard = React.memo(({ blog }: { blog: Blog }) => {
	if (!blog) {
		return <div className="text-gray-500">Blog data is unavailable</div>;
	}

	return (
		<div className="cursor-pointer block max-w-screen-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 my-2">
			<div className="flex space-x-1 items-center h-4">
				<Avatar />
				<div className="text-xs text-slate-600 font-medium">
					{blog.author?.name || "Anonymous"}
				</div>
				<div className="text-slate-200">|</div>
				<div className="text-xxs text-slate-500  font-light">
					{new Date(blog.createdAt).toLocaleDateString()}
				</div>
			</div>
			<div className="flex p-3">
				<div className="w-7/10 flex-1 pr-4">
					<h2 className="font-bold text-xl">{blog.title}</h2>
					<p className="text-sm text-gray-700">{`${blog.content.slice(0, 100)}...`}</p>
				</div>
				<div className="w-3/10 h-28">
					<img
						className=" w-full h-full object-cover rounded-xl"
						src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
						alt="image-description"
					/>
				</div>
			</div>
			<div className="flex justify-between  mt-3">
				<p className="text-xxs text-gray-400">
					{Math.ceil(blog.content.length / 60)} min read
				</p>
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
});

export default BlogCard;
