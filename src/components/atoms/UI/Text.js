// React
import React from "react";
import { useTranslation } from "react-i18next";

// MUI
import Typography from "@mui/material/Typography";

const Text = props => {
  const { title, variant, color, upper, textAlign } = props;
  const { t } = useTranslation();

  return (
    <Typography variant={variant} color={color} style={{ textAlign }}>
      {upper ? t(title).toUpperCase() : t(title)}
    </Typography>
  );
};

Text.defaultProps = {
  title: "tripleS",
  color: "inherit",
  upper: false,
  textAlign: "left"
};

export default Text;
