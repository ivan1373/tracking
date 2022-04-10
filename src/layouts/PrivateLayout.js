import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

const PrivateLayout = ({ children }) => (
	<Container component="main" maxWidth="xl">
		<Header />
		<Box mt={2}>{children}</Box>
		<Footer />
	</Container>
);

export default PrivateLayout;
