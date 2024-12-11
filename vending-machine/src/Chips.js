import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div className="snack">
            <h1>Enjoy Your Chips!</h1>
            <p>Crunchy, salty, and absolutely delicious!</p>
            <Link to="/">Go Back to Vending Machine</Link>
        </div>
    );
};

export default Chips;
