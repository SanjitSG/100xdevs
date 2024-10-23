import React from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
const Signin = () => {
	return (
		<div className="bg-slate-300 h-screen flex justify-center">
			<div className="flex flex-col justify-center">
				<div className="bg-white h-max w-80 rounded-lg text-center p-2 px-4">
					<Heading title={"Sign in"} />
					<Subheading
						label={"Enter your creadentials to access your account"}
					/>
					<InputBox placeholder={"John@google.com"} label={"Email"} />
					<InputBox placeholder={"123456"} label={"Password"} />
					<div className="pt-4">
						<Button label={"Sign in"} />
					</div>
					<BottomWarning
						label={"Don't have an account?"}
						buttonText={"Sign up"}
						to={"/signup"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Signin;
