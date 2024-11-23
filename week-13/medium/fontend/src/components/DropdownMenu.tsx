import { useEffect, useState } from "react";

type DropdownProps = {
	onClick: () => void;
};

const DropdownMenu = ({ onClick }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	// Toggle the dropdown visibility
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	// Close the dropdown when clicked outside
	const handleOutsideClick = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		if (
			!target.closest("[data-popover-target='profile-menu']") &&
			!target.closest("[data-popover='profile-menu']")
		) {
			setIsOpen(false);
		}
	};

	// Attach/remove event listeners for closing the dropdown
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.removeEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isOpen]);

	return (
		<div className="relative inline-block">
			{/* Profile Icon */}
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<img
				alt="image-profile"
				src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
				className="inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
				data-popover-target="profile-menu"
				onClick={toggleDropdown}
			/>

			{/* Dropdown Menu */}
			{isOpen && (
				<ul
					role="menu"
					data-popover="profile-menu"
					data-popover-placement="bottom"
					className="absolute right-0 z-10 min-w-[180px] mt-2 overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg focus:outline-none"
				>
					{/* Menu Items */}
					<li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 text-slate-400"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-slate-800 font-medium ml-2">My Profile</p>
					</li>
					<li className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100">
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 text-slate-400"
						>
							<path
								fillRule="evenodd"
								d="M7.84 1.804A1 1 0 0 1 8.82 1h2.36a1 1 0 0 1 .98.804l.331 1.652a6.993 6.993 0 0 1 1.929 1.115l1.598-.54a1 1 0 0 1 1.186.447l1.18 2.044a1 1 0 0 1-.205 1.251l-1.267 1.113a7.047 7.047 0 0 1 0 2.228l1.267 1.113a1 1 0 0 1 .206 1.25l-1.18 2.045a1 1 0 0 1-1.187.447l-1.598-.54a6.993 6.993 0 0 1-1.929 1.115l-.33 1.652a1 1 0 0 1-.98.804H8.82a1 1 0 0 1-.98-.804l-.331-1.652a6.993 6.993 0 0 1-1.929-1.115l-1.598.54a1 1 0 0 1-1.186-.447l-1.18-2.044a1 1 0 0 1 .205-1.251l1.267-1.114a7.05 7.05 0 0 1 0-2.227L1.821 7.773a1 1 0 0 1-.206-1.25l1.18-2.045a1 1 0 0 1 1.187-.447l1.598.54A6.992 6.992 0 0 1 7.51 3.456l.33-1.652ZM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-slate-800 font-medium ml-2">Edit Profile</p>
					</li>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<li
						onClick={onClick}
						className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100"
					>
						{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 text-slate-400"
						>
							<path
								fillRule="evenodd"
								d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
								clipRule="evenodd"
							/>
						</svg>
						<p className="text-slate-800 font-medium ml-2">Sign Out</p>
					</li>
				</ul>
			)}
		</div>
	);
};

export default DropdownMenu;