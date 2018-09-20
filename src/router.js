import React from 'react';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import AllProductScreen from './AllProductsScreen';

let SideBar = () => {
    return <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all">All</NavLink>
            <NavLink to="/hats">Hats</NavLink>
            <NavLink to="/tops">Tops</NavLink>
            <NavLink to="/pants">Pants</NavLink>
        </nav>;
}

const Home = () => {
    return <AllProductScreen/>;
};

const All = () => {
    return <h1>All</h1>
};

const Hats = () => {
    return <h1>Hats</h1>;
};

const Tops = () => {
    return <h1>Tops</h1>;
};

const Pants = () => {
    return <h1>Pants</h1>;
};

let NotFound = () => {
    return <h1>Not Found</h1>
};

let Router = () => {
    return <HashRouter>
        <div>
            <SideBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/all" component={All} />
            <Route path="/hats" component={Hats} />
            <Route path="/tops" component={Tops} />
            <Route path="/pants" component={Pants} />
            <Route path="*" component={NotFound} />
        </Switch>
        </div>
    </HashRouter>
};



export default Router; 