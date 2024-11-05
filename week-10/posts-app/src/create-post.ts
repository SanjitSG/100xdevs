import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["info", "query"] });

async function main() {
	await prisma.post.createMany({
		data: [
			{
				title: "Time waste",
				authorId: 1,
			},
			{
				title: "Skill sharp",
				authorId: 1,
			},
			{
				title: "Disciplined world",
				authorId: 1,
			},
		],
	});
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
