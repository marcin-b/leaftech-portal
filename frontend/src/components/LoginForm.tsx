import React, { useState } from "react";
import { FlexContainer } from "./FlexContainer";

interface LoginData {
	email: string;
	password: string;
}

const LoginForm: React.FC = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value)
	}
	const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
		setPassword(e.currentTarget.value)
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('%c email: ', 'color: mediumseagreen; font-weight: bold;', email)
		console.log('%c password: ', 'color: mediumseagreen; font-weight: bold;', password)
	}

	return (
		<form onSubmit={handleSubmit}>
			<FlexContainer column>
				<label>Email</label>
				<input name="email" value={email} onChange={handleChangeEmail} />
				<label>Password</label>
				<input type="password" name="password" value={password} onChange={handleChangePassword} />
				<input type="submit" value="Submit" />
			</FlexContainer>
		</form>
	);
};

export default LoginForm;