import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const results = await prisma.post.findMany({
		skip: 3,
		take: 3,
	});
	console.log(results);
}
main();
