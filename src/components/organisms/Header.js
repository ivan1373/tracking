import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import Logo from "components/atoms/Logo";
import ChangeLanguage from "./ChangeLanguage";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { getFromCookies, removeFromCookies } from "util/functions";

const Header = () => {
	const navigate = useNavigate();
	const user = getFromCookies("token");

	return (
		<AppBar elevation={3} position="fixed">
			<Toolbar>
				<Box sx={{ py: 2, flexGrow: 1 }}>
					<Logo onClick={() => navigate("/start")} />
				</Box>

				<ChangeLanguage />
				<IconButton color="secondary" onClick={() => navigate("/settings")}>
					<SettingsIcon />
				</IconButton>
				{/* <Box pl={1}>
					{user && (
						<IconButton
							onClick={() => {
								removeFromCookies("token");
								navigate(`/`);
							}}
						>
							<LogoutIcon />
						</IconButton>
					)}
				</Box> */}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
