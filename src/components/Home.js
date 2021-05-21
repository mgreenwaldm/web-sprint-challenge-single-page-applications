import {Link} from 'react-router-dom';
import React from "react";

const Home = () => {

    return (
        <div>
            <h2>Home</h2>
            <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </div>
    );
}
export default Home;