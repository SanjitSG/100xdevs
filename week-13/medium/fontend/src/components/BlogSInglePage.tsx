import HTMLReactParser from "html-react-parser/lib/index";
import Avatar from "./Avatar";

type Blog = {
	id: string;
	createdAt: Date;
	title: string;
	content: string;
	author: {
		name: string | null;
	};
};

const BlogSInglePage = ({ blog }: { blog: Blog }) => {
	if (!blog) {
		return <div>Blog data is unavailable</div>;
	}

	return (
		<div className="max-w-screen-sm lg:max-w-screen-lg h-auto m-auto  pt-28 flex justify-center lg:px-20">
			<div className="p-2">
				{/* title */}
				<div id="title">
					<h1 className="font-bold text-3xl">{blog.title}</h1>
				</div>
				<div
					id="author-card"
					className="flex gap-4 w-full  mt-4 p-2  items-center"
				>
					{/* author card */}
					<div id="image-div">
						<Avatar size={10} />
					</div>
					<div id="conent-div">
						<p className="font-medium text-lg text-green-900">
							{blog.author.name}@Medium
						</p>
						<div className="flex space-x-4 text-sm text-slate-500">
							<p>{Math.ceil(blog.content.length / 200)} min read</p>
							<p>{new Date(blog.createdAt).toDateString()}</p>
						</div>
					</div>
				</div>
				{/* content */}
				<div className="mt-7 text-lg text-justify p-2 indent-7 font-medium capitalize">
					{HTMLReactParser(blog.content)}
				</div>
			</div>
		</div>
	);
};

export default BlogSInglePage;
