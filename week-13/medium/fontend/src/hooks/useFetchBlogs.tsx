import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
type Blog = {
	id: string;
	createdAt: Date;
	published: boolean;
	title: string;
	content: string;
	author: {
		name: string;
	};
};

export const useFetchBlogs = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState<Error | null>(null);
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const fetchBlogs = async () => {
			const url = `${BACKEND_URL}/api/v1/blog/bulk-blogs`;
			try {
				const response = await axios.get(url, {
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				});
				setBlogs(response.data.blogs);
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			} catch (error: any) {
				setIsError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBlogs();
	}, []);

	return {
		isLoading,
		blogs,
		isError,
	};
};
