import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

type Blog = {
	id: string;
	title: string;
	content: string;
	createdAt: Date;
	author: {
		name: string;
	};
};

const useFetchSingleBlog = (id: string | undefined) => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState<string | null>(null);
	const [blog, setBlog] = useState<Blog | null>(null);

	useEffect(() => {
		if (!id) {
			setIsError("Blog ID is required");
			setIsLoading(false);
			return;
		}
		let isMounted = true;

		const fetchBlog = async () => {
			const url = `${BACKEND_URL}/api/v1/blog/${id}`;

			setIsLoading(true);
			setIsError(null);
			try {
				const response = await axios.get(url, {
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				});

				if (isMounted) {
					setBlog(response.data.blogPost);
				}
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} catch (error: any) {
				if (isMounted) {
					setIsError(error.response?.data?.message || "Failed to fetch blog");
				}
			} finally {
				if (isMounted) {
					setIsLoading(false);
				}
			}
		};

		fetchBlog();

		// Cleanup function to avoid state updates after unmount
		return () => {
			isMounted = false;
		};
	}, [id]);

	return {
		isLoading,
		isError,
		blog,
	};
};

export default useFetchSingleBlog;
