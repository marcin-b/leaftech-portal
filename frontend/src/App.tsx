import React from "react";
import LoginForm from "./components/LoginForm"
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<header className="App-header">
				<div className="Logo">LEAFTECH.</div>
			</header>
			<LoginForm />
		</div>
	);
};

export default App;
