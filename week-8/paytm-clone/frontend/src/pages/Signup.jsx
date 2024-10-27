import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import signupHandler from "../handlers/signupHandler.js";

const Signup = () => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

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
						onChange={(e) => setUsername(e.target.value)}
						label={"Email"}
						placeholder={"John@google.com"}
					/>
					<InputBox
						onChange={(e) => setPassword(e.target.value)}
						label={"Password"}
						placeholder={"123446"}
					/>
					<div className="pt-4">
						<Button
							onClick={() =>
								signupHandler({
									username,
									password,
									firstname,
									lastname,
									navigate,
								})
							}
							label={"Sign up"}
						/>
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
