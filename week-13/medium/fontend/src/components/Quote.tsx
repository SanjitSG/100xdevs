const Quote = () => {
	return (
		<div className="bg-slate-200 h-screen flex justify-center items-center">
			<div className="m-10 p-32">
				<blockquote>
					<p className="text-3xl font-semibold mb-2 hover:shadow-md hover:cursor-none hover:p-3 hover:rounded-xl transition-all delay-150  ease-in-out">
						"The customer service i received was exceptional. The support team
						went above and beyound to address my concerns."
					</p>
				</blockquote>
				<cite className="pe-3 font-medium text-lg text-gray-900 ">
					Michael Gough
				</cite>
				<cite className="text-sm block text-gray-500">CEO at Google</cite>
			</div>
		</div>
	);
};

export default Quote;
