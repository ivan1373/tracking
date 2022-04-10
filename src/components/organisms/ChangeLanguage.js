import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

import LanguageIcon from "@mui/icons-material/Language";
import {
	Button,
	List,
	ListItemButton,
	ListItemText,
	Popover,
} from "@mui/material";

const cookies = new Cookies();

const langList = [
	{ id: 0, name: "en", icon: "E" },
	{ id: 1, name: "de", icon: "D" },
];

const ChangeLanguage = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const { i18n } = useTranslation();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleListItemClick = (event, index, lang) => {
		setSelectedIndex(index);
		i18n.changeLanguage(lang);
		cookies.set("lang", lang);
		handleClose();
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<>
			<Button
				color="secondary"
				endIcon={<LanguageIcon />}
				onClick={handleClick}
				sx={{ px: 2 }}
			>
				{cookies.get("lang") || "en"}
			</Button>
			<Popover
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				elevation={3}
				id={id}
				onClose={handleClose}
				open={open}
			>
				<List
					component="nav"
					sx={{
						p: 0,
					}}
				>
					<ListItemButton
						disabled={cookies.get("lang") === "en"}
						onClick={(event) => handleListItemClick(event, 0, "en")}
						selected={cookies.get("lang") === "en"}
					>
						<ListItemText primary="EN" secondary="English" />
					</ListItemButton>
					<ListItemButton
						disabled={cookies.get("lang") === "hr"}
						onClick={(event) => handleListItemClick(event, 1, "hr")}
						selected={cookies.get("lang") === "hr"}
					>
						<ListItemText primary="HR" secondary="Hrvatski" />
					</ListItemButton>
				</List>
			</Popover>
		</>
	);
};

export default ChangeLanguage;
