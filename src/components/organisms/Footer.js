import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TableViewIcon from "@mui/icons-material/TableView";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import Paper from "@mui/material/Paper";

const Footer = () => {
	const { t } = useTranslation();

	const [value, setValue] = useState(window.location.pathname);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		if (window.location.pathname === "/settings") setValue("/statistics");
		return () => {};
	}, [value]);

	return (
		<Paper
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation value={value} onChange={handleChange}>
				<BottomNavigationAction
					label={t("Start page")}
					value="/start"
					to="/start"
					component={Link}
					icon={<HomeIcon />}
				/>
				<BottomNavigationAction
					label={t("Map view")}
					value="/map"
					to="/map"
					component={Link}
					icon={<LocationOnIcon />}
				/>
				<BottomNavigationAction
					label={t("Table view")}
					value="/table"
					to="/table"
					component={Link}
					icon={<TableViewIcon />}
				/>
				<BottomNavigationAction
					label={t("Statistics")}
					value="/statistics"
					to="/statistics"
					component={Link}
					icon={<BarChartIcon />}
				/>
			</BottomNavigation>
		</Paper>
	);
};

export default Footer;
