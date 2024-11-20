import type { SigninSchema, SignupSchema } from "@nexgoa/blog-common";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpHandler, signinHandler } from "../handlers/authHandler";
import LabelledInput from "./LabelledInput";

type AuthInput = SignupSchema | SigninSchema;

const Auth = ({ type }: { type: "signup" | "signin" }) => {
	const navigate = useNavigate();
	const [authInputs, setAuthInputs] = useState<AuthInput>(
		type === "signup"
			? { name: "", email: "", password: "" } // SignupSchema
			: { email: "", password: "" }, // SigninSchema
	);

	const handleSubmit = () => {
		if (type === "signup" && "name" in authInputs) {
			signUpHandler(authInputs as SignupSchema, navigate); // Explicit type cast
		} else if (type === "signin") {
			signinHandler(authInputs as SigninSchema, navigate); // Explicit type cast
		}
	};

	return (
		<div className="h-screen m-3 flex items-center justify-center">
			<div className="space-y-5 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
				<div className="text-center">
					<p className="font-extrabold text-xl">Create an account</p>
					<p className="">
						{type === "signup"
							? "Already have an account?"
							: "Sign up to explore more?"}
						<Link
							className="ps-1 underline hover:drop-shadow-md"
							to={type === "signup" ? "/signin" : "/signup"}
						>
							{type === "signup" ? "Login" : "Signup"}
						</Link>
					</p>
				</div>
				{type === "signup" ? (
					<LabelledInput
						label="Name"
						placeholder="Enter name"
						onChange={(e) =>
							setAuthInputs({
								...authInputs,
								name: e.target.value,
							})
						}
					/>
				) : null}
				<LabelledInput
					label="Email"
					placeholder="Enter Email"
					onChange={(e) =>
						setAuthInputs({
							...authInputs,
							email: e.target.value,
						})
					}
				/>
				<LabelledInput
					label="Password"
					type="password"
					placeholder="Enter Password"
					onChange={(e) =>
						setAuthInputs({
							...authInputs,
							password: e.target.value,
						})
					}
				/>
				<button
					onClick={handleSubmit}
					type="button"
					className=" text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				>
					{type === "signup" ? "Sign up" : "Sign in"}
				</button>
			</div>
		</div>
	);
};

export default Auth;
