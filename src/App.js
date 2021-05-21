import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Home from "./components/Home";
import PizzaForm from "./components/pizzaForm";

export default function App() {
    return (
        <Switch>
            <Route path="/pizza">
                <PizzaForm />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}





