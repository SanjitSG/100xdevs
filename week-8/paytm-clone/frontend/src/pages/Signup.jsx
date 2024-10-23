import React from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
const Signup = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="bg-slate-300 h-screen flex justify-center">
			<div className="flex flex-col justify-center">
				<div className="bg-white rounded-lg w-80 text-center p-2 h-max px-4">
					<Heading title={"Sign up"} />
					<Subheading label={"Enter your information to create an account"} />
					<InputBox
						onChange={(e) => setFirstname(e.target.value)}
						label={"First Name"}
						placeholder={"John"}
					/>
					<InputBox
						onChange={(e) => setLastname(e.target.value)}
						label={"Last Name"}
						placeholder={"Doe"}
					/>
					<InputBox
						onChange={(e) => setEmail(e.target.value)}
						label={"Email"}
						placeholder={"John@google.com"}
					/>
					<InputBox
						onChange={(e) => setPassword(e.target.value)}
						label={"Password"}
						placeholder={"123446"}
					/>
					<div className="pt-4">
						<Button label={"Sign up"} />
					</div>
					<BottomWarning
						label={"Already Have an account?"}
						to={"/signin"}
						buttonText={"Sign in"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signup;
