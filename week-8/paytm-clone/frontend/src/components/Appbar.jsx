import React from "react";

const Appbar = () => {
	return (
		<div className="shadow h-14 flex justify-between">
			<div
				id="logo"
				className="h-full ml-4 flex flex-col justify-center font-bold text-blue-600 text-2xl drop-shadow-md"
			>
				PayU
			</div>
		</div>
	);
};

export default Appbar;
