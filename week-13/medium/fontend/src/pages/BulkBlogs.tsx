import React from "react";
import BlogCard from "../components/BlogCard";
import BlogShimmer from "../components/BlogShimmer";
import { useFetchBlogs } from "../hooks/useFetchBlogs";

const BulkBlogs = () => {
	// blog fetching hook
	const { isLoading, blogs, isError } = useFetchBlogs();
	console.log(blogs);

	if (isLoading) {
		return (
			<div className="h-screen">
				<div className="m-2 p-5 flex flex-col space-y-7">
					<BlogShimmer />
					<BlogShimmer />
					<BlogShimmer />
				</div>
			</div>
		);
	}

	if (isError) {
		return <>Error..</>;
	}

	return (
		<div>
			{blogs && blogs.length > 0 ? (
				blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
			) : (
				<div className="text-gray-500">No blogs available.</div>
			)}
		</div>
	);
};

export default BulkBlogs;
