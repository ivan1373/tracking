import { useQuery } from "react-query";
import { client } from "services/gClient";
import { gql } from "graphql-request";

import { Skeleton, Box, Typography } from "@mui/material";

const GET_ALL_SUNBEDS = gql`
	query {
		allsunbeds(roleID: "1") {
			latitude
			longitude
		}
	}
`;

const Start = () => {
	const { status, data, error, isFetching } = useQuery("sunbeds", async () => {
		return client
			.request(GET_ALL_SUNBEDS)
			.then((data) => data)
			.catch((error) => console.log(error));
	});
	return (
		<Box>
			<Typography variant="h4">Sunbeds</Typography>
			<ul>
				{data?.allsunbeds?.map((sunbed, i) => (
					<li>{sunbed.latitude}</li>
				))}
			</ul>
		</Box>
	);
};

export default Start;
