export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		return Response.json({
			message: "Welcome, NexGoa Home Page!",
		});
	},
} satisfies ExportedHandler<Env>;
