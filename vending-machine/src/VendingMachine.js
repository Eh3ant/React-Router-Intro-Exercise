import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <h1>Welcome to the Vending Machine!</h1>
            <ul>
                <li><Link to="/chips">🥔 Get Chips</Link></li>
                <li><Link to="/soda">🥤 Get Soda</Link></li>
                <li><Link to="/candy">🍬 Get Candy</Link></li>
            </ul>
        </div>
    );
};

export default VendingMachine;


