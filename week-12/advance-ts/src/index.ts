// interface user {
// 	name: string;
// 	age: number;
// }

// function sumOfAge(user1: user, user2: user) {
// 	return user1.age + user2.age;
// }

// const result = sumOfAge({ name: "Jack", age: 20 }, { name: "Cad", age: 19 });

// console.log(result);

// pick
interface User {
	id: number;
	name: string;
	email: string;
	createdAt: Date;
}

type userProfile = Pick<User, "name" | "email">;

// partial
type updatePartial = Partial<userProfile>;

const displayUserProfile = (user: updatePartial) => {
	console.log(`Name: ${user.name}, email: ${user.email}`);
};

displayUserProfile({ name: "Max" });
