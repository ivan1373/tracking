import { client } from "./gClient";
import { gql } from "graphql-request";

const GET_ALL_SUNBEDS = gql`
	query {
		allsunbeds(roleID: "1") {
			latitude
			longitude
		}
	}
`;

export const getAllSunbeds = async () => {
	return client
		.request(GET_ALL_SUNBEDS)
		.then((data) => data)
		.catch((error) => console.log(error));
};
