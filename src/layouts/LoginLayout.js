// React, Redux, Router
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Material-UI
import { Container, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

// Atoms
import Input from "Components/atoms/inputs/Input";
import Logo from "Components/atoms/UI/Logo";
import Button from "Components/atoms/buttons/Button";

// Layout Components
import Header from "Layouts/sections/Header";

// Actions
import { login } from "Modules/units/Auth";

// Util functions
import { getCookie } from "Util/functions"

const style = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(18),
    display: "flex",
    flexDirection: "column"
  }
}));

const LoginLayout = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const classes = style();
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();

    const body = {
      username,
      password,
      lang: getCookie("lang"),
      organisation: {"id": "8107954a-f821-4356-a36d-80f83e39ca19"}
    };

     dispatch(login(body, navigate));
  };

  return (
    <>
      <Header />
      <Container maxWidth="xs" className={classes.container}>
        <Logo width="100%" />
          <Input
            label="Username"
            value={username}
            onChange={setUsername}
            required
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={setPassword}
            required
          />
          <Box mt={2}>
            <Button
              label="Submit"
              icon="chevron_right"
              type="submit"
              onClick={handleSubmit}
              fullWidth
            />
          </Box>
      </Container>
    </>
  );
};

export default LoginLayout;
