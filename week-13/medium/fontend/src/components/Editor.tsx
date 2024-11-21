import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";

interface NewBlog {
	title: string;
	content: string;
	authorId: string;
}
type Token = string | null;

const Editor = () => {
	const [newBlog, setNewBlog] = useState<NewBlog>({
		title: "",
		content: "",
		authorId: "",
	});

	useEffect(() => {
		const token: Token = localStorage.getItem("token") || "";
		const decode: { id: string } = jwtDecode(token);
		setNewBlog((prev) => ({ ...prev, authorId: decode.id }));
	}, []);

	const handleTitleChange = (e: { target: { value: string } }) => {
		setNewBlog((prev) => ({
			...prev,
			title: e.target.value,
		}));
	};

	const handleContentChange = (value: string) => {
		setNewBlog((prev) => ({
			...prev,
			content: value,
		}));
	};
	const handlePublish = async () => {
		if (newBlog.title || newBlog.content === "") {
			toast.error("Title and content cannot be empty.");
			return;
		}
		try {
			const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, newBlog, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="max-w-sm lg:max-w-3xl h-auto m-auto flex flex-col justify-center">
			<div className="m-2 p-2 shadow-xl rounded-xl">
				<div id="heading">
					<h2 className="text-3xl font-bold text-center">Create Blog</h2>
				</div>
				<div className="my-3">
					<input
						type="text"
						onChange={handleTitleChange}
						placeholder="Title"
						className="px-3 outline-none border w-full rounded-xl h-12"
					/>
				</div>
				<div id="editor" className="h-[300px] ">
					<ReactQuill
						className="w-full h-fit border-none"
						value={newBlog.content}
						onChange={handleContentChange}
						placeholder="Write your blog content here..."
					/>
				</div>
				<div className="my-3 text-center">
					<button
						onClick={handlePublish}
						type="button"
						className="text-white w-2/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
					>
						Publish
					</button>
				</div>
			</div>
		</div>
	);
};

export default Editor;
