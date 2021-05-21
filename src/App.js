import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home";
import PizzaForm from "./components/pizzaForm";

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/pizza">
                        <PizzaForm />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}





