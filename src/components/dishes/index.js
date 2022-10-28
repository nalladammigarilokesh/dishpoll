import React, { useContext } from "react";
import { Context } from "../context/index.js";
import DishesList from "./disheslist";
import "./dishes.css";
import Header from "./header";

function Dishes() {
    const { dishes } = useContext(Context);

    return (
        <div class="dishes-whole-container">
            <Header />
            <div className="dishes-container container">
                <div className="row justify-content-center">
                    {dishes &&
                        dishes.map((item, index) => {
                            return <DishesList item={item} key={index} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Dishes;
