import React from "react";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
	return (
		<div className="space-y-2 mt-3 mx-4 p-4  bg-slate-200 rounded-lg shadow-md">
			<Balance value={"10000"} />
			<Users />
		</div>
	);
};

export default Dashboard;
