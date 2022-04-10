import { useState } from "react";
import { useTranslation } from "react-i18next";
import { setCookies, getFromCookies } from "util/functions";

import LanguageIcon from "@mui/icons-material/Language";
import {
	Button,
	List,
	ListItemButton,
	ListItemText,
	Popover,
} from "@mui/material";

const ChangeLanguage = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const { i18n } = useTranslation();

	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleListItemClick = (e, lang) => {
		i18n.changeLanguage(lang);
		setCookies("lang", lang);
		handleClose();
	};

	const open = Boolean(anchorEl);

	return (
		<>
			<Button endIcon={<LanguageIcon />} onClick={handleClick} sx={{ px: 2 }}>
				{getFromCookies("lang") || "en"}
			</Button>
			<Popover
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				elevation={3}
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
						disabled={getFromCookies("lang") === "en"}
						onClick={(e) => handleListItemClick(e, "en")}
						selected={getFromCookies("lang") === "en"}
					>
						<ListItemText primary="EN" secondary="English" />
					</ListItemButton>
					<ListItemButton
						disabled={getFromCookies("lang") === "hr"}
						onClick={(e) => handleListItemClick(e, "hr")}
						selected={getFromCookies("lang") === "hr"}
					>
						<ListItemText primary="HR" secondary="Hrvatski" />
					</ListItemButton>
				</List>
			</Popover>
		</>
	);
};

export default ChangeLanguage;
