import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";

import Login from "./components/Layouts/Login";
import { LoginData } from "./components/LoginForm";
import Dashboard from "./components/Layouts/Dashboard";

import "./App.css";
import "./css/input.css";

const AppRouter: React.FC = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const handleLogin = (values: LoginData): any => {
		console.log("values", values.email);
		if (values.email === "asd@asd.asd") {
			console.log("got in?");
			setLoggedIn(true);
		}
	};

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					{!loggedIn ? <Redirect to="/login" /> : <Dashboard />}
				</Route>

				<Route
					path="/login"
					render={props => (
						<Login {...props} handleLogin={handleLogin} />
					)}
				/>
			</Switch>
		</Router>
	);
};

export default AppRouter;
