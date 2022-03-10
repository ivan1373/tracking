// React
import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import ButtonMUI from "@mui/material/Button";

// Router
import { useNavigate } from "react-router-dom";

const Button = (props) => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const { variant, label, onClick, color, goTo, fullWidth, type } = props;

	return (
		<ButtonMUI
			variant={variant}
			color={color}
			onClick={goTo ? () => navigate(goTo) : onClick}
			fullWidth={fullWidth}
			type={type}
		>
			{t(label)}
		</ButtonMUI>
	);
};

Button.defaultProps = {
	variant: "contained",
	label: "Label",
	onClick: () => console.log("Ouch!"),
	color: "primary",
	goTo: "",
	fullWidth: false,
	type: "button",
};

export default Button;
