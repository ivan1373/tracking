import { useQuery } from "react-query";
import { getAllSunbeds } from "services/sunbedService";
import { Box, Typography } from "@mui/material";

const Start = () => {
	const { status, data, error, isFetching } = useQuery("sunbeds", () =>
		getAllSunbeds()
	);
	return (
		<Box>
			<Typography variant="h4">Sunbeds</Typography>
			<ul>
				{data?.allsunbeds?.map((sunbed, i) => (
					<li key={i}>{sunbed.latitude}</li>
				))}
			</ul>
		</Box>
	);
};

export default Start;
