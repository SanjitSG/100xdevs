import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// By ID

async function main() {
	const users = await prisma.post.findMany();
	console.log(users);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
