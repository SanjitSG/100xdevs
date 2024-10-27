import React from "react";
import { useSearchParams } from "react-router-dom";

const Appbar = () => {
	const [searchParams] = useSearchParams();
	const name = searchParams.get("name") || "S";
	return (
		<div className="shadow h-14 flex justify-between">
			<div
				id="logo"
				className="h-full ml-4 flex flex-col justify-center font-bold text-blue-600 text-2xl drop-shadow-md"
			>
				PayU
			</div>
			<div className="flex">
				<div className="flex flex-col justify-center h-full mr-2 font-bold drop-shadow-sm">
					Hello
				</div>
				<div className="rounded-full h-12 w-12 bg-green-300 flex justify-center mt-1 mr-2">
					<div className="flex flex-col justify-center h-full text-xl">
						{name[0].toUpperCase()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Appbar;
