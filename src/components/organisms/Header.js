import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { IconButton } from "@mui/material";
import Logo from "components/atoms/Logo";
import ChangeLanguage from "./ChangeLanguage";

import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const Header = () => {
	const navigate = useNavigate();
	const user = cookies.get("token");

	return (
		<AppBar color="transparent" elevation={0} position="relative">
			<Toolbar disableGutters>
				<Box sx={{ py: 1, flexGrow: 1 }}>
					<Logo onClick={() => navigate("/start")} />
				</Box>

				<ChangeLanguage />
				<IconButton onClick={() => navigate("/settings")}>
					<SettingsIcon />
				</IconButton>
				<Box pl={1}>
					{user && (
						<IconButton
							onClick={() => {
								cookies.remove("token");
								navigate(`/`);
							}}
						>
							<LogoutIcon />
						</IconButton>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
