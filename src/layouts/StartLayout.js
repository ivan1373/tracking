// React
import React from "react";

// Material-UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// Layout components
import Header from "Layouts/sections/Header";

const StartLayout = (state) => (
	<>
		<Header />
		<Container>
			<Box mt={11}>{state.children}</Box>
		</Container>
	</>
);

export default StartLayout;
