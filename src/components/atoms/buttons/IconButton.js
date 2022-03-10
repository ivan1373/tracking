// React
import React from "react";

// MUI
import IconButtonMUI from "@mui/material/IconButton";

const IconButton = props => {
  const { onClick, color, icon } = props;

  return (
    <IconButtonMUI
      color={color}
      onClick={e => {
        onClick(e);
      }}
    >
      {icon}
    </IconButtonMUI>
  );
};

IconButton.defaultProps = {
  onClick: () => console.log("Clicked!"),
  color: "primary",
  icon: "mood"
};

export default IconButton;
