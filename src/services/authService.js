import { client } from "./gClient";
import { toast } from "react-hot-toast";
import { gql } from "graphql-request";
import { setCookies } from "util/functions";

const LOGIN_MUTATION = gql`
	mutation ($username: String!, $password: String!) {
		login(input: { username: $username, password: $password }) {
			accessToken
		}
	}
`;

export const login = async (username, password, navigate) => {
	return client
		.request(LOGIN_MUTATION, { username, password })
		.then((data) => {
			setCookies("token", data?.login?.accessToken);
			navigate("/start");
			toast.success("Logged in successfully!");
		})
		.catch((error) =>
			toast.error(error?.response?.errors[0]?.message || "Login failed!")
		);
};
