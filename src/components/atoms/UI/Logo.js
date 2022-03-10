// React
import React from "react";

import makeStyles from '@mui/styles/makeStyles';

// Image
import logo from "Assets/images/pinija.png";

const style = makeStyles(() => ({
	logo: { verticalAlign: "middle" },
}));

const Logo = (props) => {
	const classes = style();

	const { width, goTo } = props;

	return (
		<a href={goTo}>
			<img alt="logo" src={logo} className={classes.logo} style={{ width }} />
		</a>
	);
};

Logo.defaultProps = {
	width: "100%",
	goTo: "/",
};

export default Logo;
