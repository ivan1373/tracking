// React
import React from "react";

// Material-UI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// Layout components
import PrivateHeader from "Layouts/sections/PrivateHeader";
import Footer from "Layouts/sections/Footer";

const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
};

const TripleLayout = (state) => (
	<>
		<PrivateHeader />
		<Container>
			<Box mt={11}>{state.children}</Box>
		</Container>
		<Box
			style={{
				width: "100%",
				position: "fixed",
				bottom: 0,
				boxShadow: "0px -7px 8px -7px rgba(0,0,0,0.20)",
				paddingBottom: isIos() ? "12px" : null,
				backgroundColor: "white",
				opacity: "0.95",
			}}
		>
			<Container fixed maxWidth="md">
				<Footer />
			</Container>
		</Box>
	</>
);

export default TripleLayout;
