import React from "react";

type Blog = {
	id: string;
	createdAt: Date;
	published: boolean;
	title: string;
	content: string;
	author: {
		name: string | null;
	};
};

const BlogCard = ({ blog }: { blog: Blog }) => {
	return (
		<div className="blog-card">
			<h2>{blog.title}</h2>
			<p>{blog.content}</p>
			<p>
				By: {blog.author?.name || "Anonymous"} on{" "}
				{new Date(blog.createdAt).toLocaleDateString()}
			</p>
		</div>
	);
};

export default BlogCard;
