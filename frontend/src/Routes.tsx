import Dashboard from 'pages/Dashboard/dashboard';
import Home from 'pages/Home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;