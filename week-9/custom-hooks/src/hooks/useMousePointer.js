import { useCallback, useEffect, useState } from "react";

export const useMousePointer = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = useCallback((e) =>
		setPosition({ x: e.clientX, y: e.clientY }),
	);

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, [handleMouseMove]);

	return position;
};