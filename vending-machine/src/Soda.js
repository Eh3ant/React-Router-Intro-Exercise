import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div className="snack">
            <h1>Enjoy Your Soda!</h1>
            <p>A refreshing drink to quench your thirst!</p>
            <Link to="/">Go Back to Vending Machine</Link>
        </div>
    );
};

export default Soda;
