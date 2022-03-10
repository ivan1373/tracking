// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Material-UI
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import TimelineIcon from "@mui/icons-material/Timeline";

const Footer = () => {
	const { t } = useTranslation();

	const [value, setValue] = useState(window.location.pathname);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
		>
			<BottomNavigationAction
				label={t("Start page")}
				to="/start"
				value="/start"
				component={Link}
                style={{padding:"initial"}}
				icon={<HomeIcon />}
			/>
			<BottomNavigationAction
				label={t("Map view")}
				to="/map"
				value="/map"
				component={Link}
                style={{padding:"initial"}}
				icon={<LocationOnIcon />}
			/>
			<BottomNavigationAction
				label={t("Table view")}
				to="/table"
				value="/table"
				component={Link}
                style={{padding:"initial"}}
				icon={<TableChartIcon />}
			/>
			<BottomNavigationAction
				label={t("Statistics")}
				to="/statistics"
				value="/statistics"
				component={Link}
                style={{padding:"initial"}}
				icon={<TimelineIcon />}
			/>
		</BottomNavigation>
	);
};

export default Footer;
