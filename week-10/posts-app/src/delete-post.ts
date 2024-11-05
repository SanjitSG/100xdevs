import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	const deleted = await prisma.post.delete({
		where: {
			id: 4,
		},
	});

	console.log(deleted);
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
