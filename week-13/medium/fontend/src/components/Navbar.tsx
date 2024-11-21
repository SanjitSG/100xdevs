import { Link, useNavigate } from "react-router-dom";
import { logoutHandle } from "../handlers/authHandler";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<nav className="max-w-screen-sm lg:max-w-screen-lg mx-auto sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200  shadow-sm rounded-full">
			<div className=" flex flex-wrap items-center justify-between mx-auto p-4">
				<Link
					to={"/"}
					className="flex items-center space-x-3 rtl:space-x-reverse"
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

				<div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
					<div className="">
						<button
							id="dropdownAvatarNameButton"
							data-dropdown-toggle="dropdownAvatarName"
							className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600  md:me-0 focus:ring-4 focus:ring-gray-100 "
							type="button"
						>
							<span className="sr-only">Open user menu</span>
							<img
								className="w-8 h-8 me-2 rounded-full"
								src="https://avatars.githubusercontent.com/u/45919581?s=400&u=1911681bca8b802aad70fb8d94b5a3521b934089&v=4"
								alt="Sanjit Gawade"
							/>
							Sanjit Gawade
							<svg
								className="w-2.5 h-2.5 ms-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>

						<div
							id="dropdownAvatarName"
							className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
						>
							<div className="px-4 py-3 text-sm text-gray-900">
								<div className="font-medium ">Pro User</div>
								<div className="truncate">name@flowbite.com</div>
							</div>
							<ul
								className="py-2 text-sm text-gray-700 "
								aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
							>
								<li>
									<button
										type="button"
										className="block px-4 py-2 hover:bg-gray-100  w-full"
									>
										Dashboard
									</button>
								</li>
								<li>
									<button
										type="button"
										className="block px-4 py-2 hover:bg-gray-100  w-full"
									>
										Settings
									</button>
								</li>
								<li>
									<button
										type="button"
										className="block px-4 py-2 hover:bg-gray-100  w-full"
									>
										Earnings
									</button>
								</li>
							</ul>

							<button
								type="button"
								onClick={() => {
									logoutHandle(navigate);
								}}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full "
							>
								Sign out
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
