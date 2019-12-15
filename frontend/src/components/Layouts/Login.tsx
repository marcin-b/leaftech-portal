import React from "react";

import LoginForm from "../LoginForm";
import background from "../../assets/background.jpg";

export interface ILogin {
	handleLogin: (values: any) => void;
}

const Login = (props: ILogin) => {
	const { handleLogin } = props;
	return (
		<div className="App">
			<header
				className="App-header"
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover"
				}}
			>
				<div className="Logo">LEAFTECH.</div>
			</header>
			<LoginForm handleLogin={handleLogin} />
		</div>
	);
};

export default Login;
