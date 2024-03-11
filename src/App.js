// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";

// const App = () => {
//   const routing = useRoutes(Themeroutes);

//   return <div className="dark">{routing}</div>;
// };

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";

/****Layouts*****/
const FullLayout = lazy(() => import("./layouts/FullLayout"));

/***** Pages ****/
const Starter = lazy(() => import("./views/Starter"));
const Alerts = lazy(() => import("./views/ui/Alerts"));
const Badges = lazy(() => import("./views/ui/Badges"));
const Buttons = lazy(() => import("./views/ui/Buttons"));
const Cards = lazy(() => import("./views/ui/Cards"));
const ChatDoc = lazy(() => import("./views/ChatDoc"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          {/* <Route index element={<Navigate to="/Starter" />} /> */}
          <Route index element={<Starter />} />
          <Route path="/Alerts" element={<Alerts />} />
          <Route path="/Badges" element={<Badges />} />
          <Route path="/Buttons" element={<Buttons />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/ChatDoc" element={<ChatDoc />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
