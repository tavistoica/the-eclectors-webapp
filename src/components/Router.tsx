import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Main } from "../pages/Main";

interface RouterProps {}

export const Router: React.FC<RouterProps> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/404"
          component={() => (
            <Box textAlign="center" fontSize="40px" pt={10}>
              404 Not Found
            </Box>
          )}
        />
        <Route exact path="/" component={Main} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
