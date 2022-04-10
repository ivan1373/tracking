import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { request, gql } from "graphql-request";
import Logo from "components/atoms/Logo";

import { useTranslation } from "react-i18next";

import { setCookies } from "util/functions";
import { client } from "services/gClient";

const LOGIN_MUTATION = gql`
	mutation ($username: String!, $password: String!) {
		login(input: { username: $username, password: $password }) {
			accessToken
		}
	}
`;

const Login = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		// try {
		// 	const data = await request(
		// 		"http://localhost:8000/query",
		// 		LOGIN_MUTATION,
		// 		{ username, password }
		// 	);
		// 	setCookies("token", data?.login?.accessToken);
		// 	navigate("/start");
		// 	toast.success("Logged in successfully!");
		// } catch (error) {
		// 	toast.error("Login failed!");
		// }
		client
			.request(LOGIN_MUTATION, { username, password })
			.then((data) => {
				setCookies("token", data?.login?.accessToken);
				navigate("/start");
				toast.success("Logged in successfully!");
			})
			.catch((error) => toast.error(error?.response?.errors[0]?.message));
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Logo />
			<Box sx={{ mt: 1 }}>
				<TextField
					margin="normal"
					required
					fullWidth
					label={t("Username")}
					autoFocus
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					margin="normal"
					required
					fullWidth
					label={t("Password")}
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					sx={{ mt: 3, mb: 2 }}
					onClick={login}
				>
					{t("Sign in")}
				</Button>
			</Box>
		</Box>
	);
};

export default Login;
