// React
import React, { lazy, Suspense } from "react";
import {
	Navigate,
	Route,
	useLocation,
	Routes,
} from "react-router-dom";
import { Helmet } from "react-helmet";

// Misc
import NotFoundPage from "Layouts/NotFoundPage";

// Loaders
import FullScreenSpinner from "Layouts/loaders/FullScreenSpinner";

// Layouts
import LoginLayout from "Layouts/LoginLayout";
import StartLayout from "Layouts/StartLayout";
import TripleLayout from "Layouts/TripleLayout";


// Components
const Home = lazy(() => import("Pages/home/index.js"));
const Start = lazy(() => import("Pages/start/index.js"));
const MapView = lazy(() => import("Pages/map/index.js"));
const TableView = lazy(() => import("Pages/table/index.js"));
const Statistics = lazy(() => import("Pages/statistics/index.js"));

const PublicRoutes = ({
	component: Component,
	layout: Layout,
	user,
	title,
	description,
	location
}) => {
	return user === null ? (
		<Layout>
			<Helmet>
				<title>TripleHost tracking system | {title}</title>
				<meta name="description" content={description} />
			</Helmet>
			<Component />
		</Layout>
	) : (
		<Navigate to="/start" state={location} />
	);
};

const PrivateRoutes = ({
	component: Component,
	layout: Layout,
	user,
	title,
	description,
	location,
}) => {
	return user ? (
		<Layout>
			<Helmet>
				<title>TripleHost tracking system | {title}</title>
				<meta name="description" content={description} />
			</Helmet>
			<Component />
		</Layout>
	) : (
		<Navigate to="/login" state={location} />
	);
};

const MainRouter = () => {
	const location = useLocation();
	const user = JSON.parse(localStorage.getItem("user"));

    
	return (
		<Suspense fallback={<FullScreenSpinner />}>
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoutes
							component={Home}
							layout={StartLayout}
							title={"Homepage"}
							user={user}
							location={location}
							description={"Homepage section"}
						/>
					}
				/>
				<Route
					path="/login"
					element={
						<PublicRoutes
							component={LoginLayout}
							layout={StartLayout}
							title={"Log in"}
							user={user}
							location={location}
							description={"Log in section"}
						/>
					}
				/>
				{/* Private Route */}
				<Route
					path="/start"
					element={
						<PrivateRoutes
							component={Start}
							layout={TripleLayout}
							title={"Start"}
							user={user}
							location={location}
							description={"Start page"}
						/>
					}
				/>
				<Route
					path="/map"
					element={
						<PrivateRoutes
							component={MapView}
							layout={TripleLayout}
							title={"Map"}
							user={user}
							location={location}
							description={"Map view"}
						/>
					}
				/>
				<Route
					path="/table"
					element={
						<PrivateRoutes
							component={TableView}
							layout={TripleLayout}
							title={"Table"}
							user={user}
							location={location}
							description={"Table view"}
						/>
					}
				/>
				<Route
					path="/statistics"
					element={
						<PrivateRoutes
							component={Statistics}
							layout={TripleLayout}
							title={"Statistics"}
							user={user}
							location={location}
							description={"Statistics"}
						/>
					}
				/>

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Suspense>
	);
};

export default MainRouter;
