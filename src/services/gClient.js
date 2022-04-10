import { GraphQLClient } from "graphql-request";
import { getFromCookies } from "util/functions";

export const client = new GraphQLClient("http://localhost:8000/query", {
	// headers: {
	// 	Authorization: `JWT ${getFromCookies("token")}`,
	// 	Token: getFromCookies("token"),
	// },
});
