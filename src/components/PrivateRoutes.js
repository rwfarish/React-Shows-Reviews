import React from "react";
import { Router } from "@reach/router";
import Home from "../Pages/Home";
import ProfilePage from "../Pages/ProfilePage";

export default function PrivateRoutes({ setSignedIn, signedIn }) {
  return (
    <Router>
      <Home path="/home" setSignedIn={setSignedIn} />
      <ProfilePage path="/profile" signedIn={signedIn} />
    </Router>
  );
}
