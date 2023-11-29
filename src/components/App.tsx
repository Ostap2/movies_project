import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";

import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import MovieDetails from "../pages/MovieDetails";
import FavoritePage from "../pages/FavoritePage";

import MovieDetailsPage from "../pages/MovieDetailsPage";
import Settings from "../pages/Settings";

import ActorPage from "../pages/ActorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path={RouteNames.Home} element={<HomePage />} />
        <Route path={RouteNames.MovieDetails} element={<MovieDetailsPage />} />
        <Route path={RouteNames.Login} element={<LoginPage />} />
        <Route path={RouteNames.Register} element={<SignUpPage />} />
        <Route path={RouteNames.Favorites} element={<FavoritePage />} />
         <Route path={RouteNames.Settings} element={<RestrictedRoute><Settings /></RestrictedRoute>} />

      </Route>
    </Routes>
  );
}
export default App;
