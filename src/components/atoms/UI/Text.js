// React
import React from "react";

// MUI
import Typography from "@mui/material/Typography";

const Text = props => {
  const { title, variant, color } = props;

  return (
    <Typography variant={variant} color={color}>
      {title}
    </Typography>
  );
};

Text.defaultProps = {
  title: "tripleS",
  color: "primary"
};

export default Text;
