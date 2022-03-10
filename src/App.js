// React
import React from "react";

// Router
import { BrowserRouter } from "react-router-dom";
import MainRouter from "Router/MainRouter";

// Notification manager
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

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


const App = () => {
	return (
		<Provider store={configureStore()}>
			<NotificationContainer />
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<BrowserRouter>
						<MainRouter />
					</BrowserRouter>
				</ThemeProvider>
			</StyledEngineProvider>
		</Provider>
	);
};

export default App;
