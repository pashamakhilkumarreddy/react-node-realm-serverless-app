import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Loader from "../components/Loader";
import ErrorBoundary from "../components/errors/ErrorBoundary";

const PageNotFound = lazy(() => import("../pages/PageNotFound"));

const routes = () => (
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <Switch>
        <Route path={["/", "/home", "/index"]} exact>
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ErrorBoundary>
  </Suspense>
);

export default routes;
