// React
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// MUI
import Popover from "@mui/material/Popover";
import LanguageIcon from '@mui/icons-material/Language';

// Atoms
import IconButton from "Components/atoms/buttons/IconButton";

// Molecules
import ListItem from "Components/molecules/ListItem";

// Flags
import gbFlag from "Assets/images/flags/gb.svg";
import hrFlag from "Assets/images/flags/hr.svg";

// Utils
import moment from "moment";
import { getCookie, getCookieWithPromise } from "Util/functions";

const ChangeLanguage = props => {
  const { color } = props;
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    getCookieWithPromise("lang").then(response => {
      i18n.changeLanguage(response);
      moment.locale(response);
    });
    return () => {};
  }, []);

  const changeLanguage = value => {
    i18n.changeLanguage(value);
    moment.locale(value);
    document.cookie = `lang=${value}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return <>
    <IconButton icon={<LanguageIcon />} color={color} onClick={handleClick} size="large" />
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
    >
      <ListItem
        icon={<img alt="langFlag" src={gbFlag} />}
        primaryLabel="English"
        selected={getCookie("lang")==="en"}
        clickable
        onClick={() => changeLanguage("en")}
      />
      <ListItem
        icon={<img alt="langFlag" src={hrFlag} />}
        primaryLabel="Hrvatski"
        selected={getCookie("lang")==="hr"}
        clickable
        onClick={() => changeLanguage("hr")}
      />
    </Popover>
  </>;
};

ChangeLanguage.defaultProps = {
  color: "primary"
};

export default ChangeLanguage;
