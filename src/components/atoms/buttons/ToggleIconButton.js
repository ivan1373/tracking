// React
import React, { useState } from "react";

// MUI
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

const ToggleIconButton = props => {
  const [toggled, toggle] = useState(false);

  const { onFirstClick, onSecondClick, color, firstIcon, secondIcon } = props;

  return (
    <IconButton
      color={color}
      onClick={() => {
        toggle(!toggled);
        // eslint-disable-next-line no-unused-expressions
        toggled ? onFirstClick() : onSecondClick();
      }}
      size="large">
      <Icon>{toggled ? secondIcon : firstIcon}</Icon>
    </IconButton>
  );
};

ToggleIconButton.defaultProps = {
  onFirstClick: () => console.log("First!"),
  onSecondClick: () => console.log("Second!"),
  color: "primary",
  firstIcon: "mood",
  secondIcon: "mood_bad"
};

export default ToggleIconButton;
