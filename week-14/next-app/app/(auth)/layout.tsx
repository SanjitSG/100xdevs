export default function ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div className="text-center py-2 border-b">
				20% off for the next few days
			</div>
			{children}
		</div>
	);
}
