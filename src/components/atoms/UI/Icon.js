// React
import React from "react";

// MUI
import IconMUI from "@mui/material/Icon";

const Icon = props => {
  const { icon, size, color } = props;
  return (
    <IconMUI style={{ fontSize: size }} color={color}>
      {icon}
    </IconMUI>
  );
};

Icon.defaultProps = {
  icon: "menu",
  size: "4rem",
  color: "primary"
};

export default Icon;
