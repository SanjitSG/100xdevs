import { useEffect, useState } from "react";

export const useDebounce = (searchVal, dealy) => {
	const [debVal, setDebVal] = useState("");

	useEffect(() => {
		if (searchVal.trim() === "") return;

		const timer = setTimeout(() => {
			setDebVal(searchVal);
			console.log("network call made with: ", searchVal);
		}, dealy);

		return () => clearTimeout(timer);
	}, [searchVal, dealy]);

	return debVal;
};
