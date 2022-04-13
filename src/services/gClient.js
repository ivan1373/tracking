import { GraphQLClient } from "graphql-request";
import { getFromCookies } from "util/functions";
import { authHeader } from "util/functions";

export const client = new GraphQLClient("http://localhost:8000/query", {
	headers: {
		...authHeader(),
	},
});
