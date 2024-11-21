import { useParams } from "react-router-dom";
import BlogSInglePage from "../components/BlogSInglePage";
import BlogShimmer from "../components/BlogShimmer";
import useFetchSingleBlog from "../hooks/useFetchSingleBlog";

const Blog = () => {
	const { id } = useParams<{ id: string }>();
	const { isError, isLoading, blog } = useFetchSingleBlog(id);

	if (isLoading) {
		return (
			<div>
				<BlogShimmer />
			</div>
		);
	}
	if (isError) {
		return <div>Error</div>;
	}
	if (blog) {
		return (
			<div className="blog-container">
				<BlogSInglePage blog={blog} />
			</div>
		);
	}

	// Handle the unlikely case of no blog data
	return (
		<div className="no-data">
			<p>No blog found.</p>
		</div>
	);
};

export default Blog;
