import { Link, useNavigate } from "react-router-dom";
import { logoutHandle } from "../handlers/authHandler";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="max-w-sm lg:max-w-screen-lg mx-auto sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200  shadow-sm rounded-full">
			<div className=" flex flex-wrap items-center justify-center mx-auto p-4 ">
				<div id="logo" className="flex-1 hidden md:block">
					<Link
						to={"/"}
						className="flex items-center space-x-3 rtl:space-x-reverse k"
					>
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="h-8"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-2xl font-semibold whitespace-nowrap ">
							NexGoa
						</span>
					</Link>
				</div>
				<div className="flex  items-center  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					{/* publish button */}
					<div className="flex px-4">
						<Link to={"/editor"}>
							<button
								type="button"
								className="px-8 py-2  rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
							>
								Create Blog
							</button>
						</Link>
					</div>
					{/* dropdown menu */}
					<div className="">
						<DropdownMenu onClick={() => logoutHandle(navigate)} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
