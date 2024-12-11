import React from "react";
import { Link } from "react-router-dom";

const Snack = ({ name }) => {
    return (
        <div className="snack">
            <h1>Enjoy Your {name}!</h1>
            <p>There's nothing like some fresh {name.toLowerCase()} to brighten your day.</p>
            <Link to="/">Go Back to Vending Machine</Link>
        </div>
    );
};

export default Snack;
