import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
    return (
        <div className="snack">
            <h1>Enjoy Your Candy!</h1>
            <p>Sweet and sugary happiness in every bite!</p>
            <Link to="/">Go Back to Vending Machine</Link>
        </div>
    );
};

export default Candy;
