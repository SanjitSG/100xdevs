import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import userDatafetchHandler from "../handlers/userDataFetchHandle";
import Button from "./Button";
const Users = () => {
	// make api call to extract users
	const [userList, setUserList] = useState([]);
	const [filter, setFilter] = useState("");
	useEffect(() => {
		const fetchUsers = async () => {
			const data = await userDatafetchHandler(filter);
			setUserList(data);
		};

		const timer = setTimeout(fetchUsers, 200);

		return () => clearTimeout(timer);
	}, [filter]);
	// display list of users
	return (
		<div className="flex flex-col">
			<InputBox
				label={"Users"}
				placeholder={"Search Users..."}
				onChange={(e) => {
					setFilter(e.target.value);
				}}
			/>
			<div className="mt-3 flex flex-col items-center">
				{userList.map((item) => (
					<User key={item._id} item={item} />
				))}
			</div>
		</div>
	);
};

function User({ item }) {
	const navigate = useNavigate();

	return (
		<div className="flex justify-between items-center p-2 border-b border-gray-300 w-3/5">
			<div>
				<span className="font-bold">
					{item.firstname} {item.lastname}
				</span>
			</div>
			<div>
				<Button
					onClick={() => {
						navigate(`/send?id=${item._id}&name=${item.firstname}`);
					}}
					label={"Send Money"}
				/>
			</div>
		</div>
	);
}
export default Users;
