// React
import React from "react";

// Router
//import { Router } from "react-router-dom";
import MainRouter from "Router/MainRouter";
import CustomRouter from "Router/CustomRouter";

// Notification manager
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { createBrowserHistory } from "history";

// Redux
import { Provider } from "react-redux";
import configureStore from "Modules/configureStore";

// Theme
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import theme from "Styles/theme";
import CssBaseline from "@mui/material/CssBaseline";

// Localization
import "./localization/i18n";

require("babel-polyfill");

const history = createBrowserHistory()

const App = () => {

	return (
		<Provider store={configureStore()}>
			<NotificationContainer />
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<CustomRouter history={history}>
						<MainRouter />
					</CustomRouter>
				</ThemeProvider>
			</StyledEngineProvider>
		</Provider>
	);
};

export default App;
