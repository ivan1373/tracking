import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Logo = ({ onClick }) => {
	const { t } = useTranslation();
	return (
		<>
			<Typography
				onClick={onClick}
				sx={{
					cursor: onClick ? "pointer" : "default",
				}}
				variant="h5"
			>
				Hotel Pinija
			</Typography>
			<Typography variant="subtitle2">
				{t("tripleHost tracking system")}
			</Typography>
		</>
	);
};

export default Logo;
