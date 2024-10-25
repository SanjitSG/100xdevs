import React, { useEffect, useState } from "react";
import InputBox from "../components/InputBox";
const Users = () => {
	// make api call to extract users
	const [userList, setUserList] = useState([]);
	useEffect(() => {}, []);
	// display list of users
	return (
		<div className="flex flex-col">
			<InputBox
				label={"Users"}
				placeholder={"Search Users..."}
				onChange={() => {}}
			/>
			<div>
				{userList.map((details) => (
					<User key={userId} details={details} />
				))}
			</div>
		</div>
	);
};

function User({ key, details }) {
	return <></>;
}
export default Users;
