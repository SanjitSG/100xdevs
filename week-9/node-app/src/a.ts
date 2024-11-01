// // 1. Giving type to function argument
// function greet(firstName: string) {
// 	console.log(`Hello ${firstName}`);
// }

// greet("Sanjit");

// // return type of a function (explicite)

// function sum(a: number, b: number): number {
// 	return a + b;
// }

// const x = sum(10, 2);

// // implicite return type - based on internal logic
// function isLegal(age: number) {
// 	if (age > 18) return true;
// 	return false;
// }

// const st = isLegal(20); // st is of type boolean

// // giving type to a function as (callback) passed as parameter.
// function pa(cb: () => void): void {
// 	setTimeout(cb, 1000);
// }

// pa(() => {
// 	console.log("Hello");
// });

enum Direction {
	Up = 0,
	Down = 1,
	Right = 2,
	Left = 3,
}

function doSomething(keyPressed: Direction) {
	if (keyPressed === Direction.Down) {
		console.log(Direction.Down);
	}
}

doSomething(Direction.Down);
