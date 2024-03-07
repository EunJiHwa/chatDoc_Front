import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const FundsInfo = lazy(() => import("../views/FundsInfo"));
const ProfitStatus = lazy(() => import("../views/ProfitStatus"));
const AccountReceivable = lazy(() => import("../views/AccountReceivable"));
const QuoutationSalesStatus = lazy(() =>
  import("../views/QuoutationSalesStatus")
);
const QuoutationSalesStatusList = lazy(() =>
  import("../views/QuoutationSalesStatusList")
);

const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const ChatDoc = lazy(() => import("../views/ChatDoc"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      {
        path: "/QuoutationSalesStatusList",
        exact: true,
        element: <QuoutationSalesStatusList />,
      },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/ChatDoc", exact: true, element: <ChatDoc /> },
    ],
  },
];

export default ThemeRoutes;
