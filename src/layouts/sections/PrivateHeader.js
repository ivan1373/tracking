// React, Redux, Router
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

// MUI
import { AppBar, Toolbar, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import SettingsIcon from '@mui/icons-material/Settings';

// Atoms
import Logo from "Components/atoms/UI/Logo";
import Button from "Components/atoms/buttons/Button";
import IconButton from "Components/atoms/buttons/IconButton";

// Molecules
import ChangeLanguage from "Components/molecules/ChangeLanguage";

// Actions
import { logOut } from "Modules/units/Auth";

const style = makeStyles(() => ({
	title: {
		flexGrow: 1,
	},
	appBar: {
		backgroundColor: "#ffffffe6",
		//padding: "0.125rem 0",
		//borderRadius: "0 0 10px 10px",
		//height: "75px",
	},
}));

const PrivateHeader = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const classes = style();

	return (
        <AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Box className={classes.title}>
					<Logo width="115px" goTo={user ? "start" : ""} />
				</Box>
				<Box>
					<IconButton icon={<SettingsIcon />} onClick={() => console.log("clicked")} size="large" />
				</Box>
				<Box>
					<ChangeLanguage color="secondary" />
				</Box>
				<Box ml={1}>
					{user && (
						<Button
							label="Log out"
							color="secondary"
							onClick={() => dispatch(logOut(navigate))}
						/>
					)}
				</Box>
			</Toolbar>
		</AppBar>
    );
};

export default PrivateHeader;
