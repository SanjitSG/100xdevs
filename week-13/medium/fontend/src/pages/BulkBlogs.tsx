import BlogCard from "../components/BlogCard";

import { Link } from "react-router-dom";
import BlogShimmer from "../components/BlogShimmer";
import { useFetchBlogs } from "../hooks/useFetchBlogs";

const BulkBlogs = () => {
	// blog fetching hook
	const { isLoading, blogs, isError } = useFetchBlogs();

	if (isLoading) {
		return (
			<div className="h-screen">
				<div className="m-2 p-5 flex flex-col space-y-7">
					<BlogShimmer />
					<BlogShimmer />
					<BlogShimmer />
					<BlogShimmer />
				</div>
			</div>
		);
	}

	if (isError) {
		return <>Error</>;
	}

	return (
		<div className="flex flex-col items-center">
			{blogs && blogs.length > 0 ? (
				blogs.map((blog) => (
					<Link key={blog.id} to={`/blog/${blog.id}`}>
						<BlogCard blog={blog} />
					</Link>
				))
			) : (
				<div className="text-gray-500">No blogs available.</div>
			)}
		</div>
	);
};

export default BulkBlogs;
