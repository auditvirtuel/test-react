import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import PageHome from "./page/home";
import PageProductList from "./page/product-list";
import PageOrganizationList from "./page/organization-list";
import PageOrganizationDetails from "./page/organization-details";
import PageUserDetails from "./page/user-details";
import PageCGU from "./page/cgu";
import PageProductDetails from "./page/product-details";
import PageUserLogin from "./page/user-login";
import PageUserCreate from "./page/user-create";
import PageUserPasswordRecovery from "./page/user-password-recovery";
import PageUserList from "./page/user-list";
import PageUserSignUp from "./page/user-signup";
import PageDashboard from "./page/dashboard";
import PageServiceOrder from "./page/service-order";
import Page404 from "./page/404";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#529048",
    },
    secondary: {
      main: "#3b3b3b",
    },
    background: {
      default: "#eeeeee",
    },
  },
});
class App extends React.Component {
  render = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/login" component={PageUserLogin} />
              <Route
                path="/password-recovery"
                component={PageUserPasswordRecovery}
              />
              <Route exact path="/products" component={PageProductList} />
              <Route
                exact
                path="/products/:productId"
                component={PageProductDetails}
              />
              <Route
                exact
                path="/organizations"
                component={PageOrganizationList}
              />
              <Route
                exact
                path="/organizations/:organizationId"
                component={PageOrganizationDetails}
              />
              <Route exact path="/dashboard" component={PageDashboard} />
              <Route exact path="/service-order" component={PageServiceOrder} />
              <Route exact path="/users" component={PageUserList} />
              <Route exact path="/user-signup" component={PageUserSignUp} />
              <Route exact path="/user-create" component={PageUserCreate} />
              <Route exact path="/users/:userId" component={PageUserDetails} />
              <Route exact path="/cgu" component={PageCGU} />
              <Route exact path="/" component={PageHome} />
              <Route path="*" component={Page404} />
            </Switch>
          </Router>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
}

export default App;
