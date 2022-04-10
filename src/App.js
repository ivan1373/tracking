import Router from "router";
import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import theme from "styles/theme";
import "i18n/index";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: () => {
			toast.error(`Something went wrong!`);
		},
	}),
	defaultOptions: {
		queries: {
			retry: false,
			refetchOnWindowFocus: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router />
				<Toaster />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
