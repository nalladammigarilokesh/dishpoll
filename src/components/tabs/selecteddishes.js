import React, { useContext } from "react";
import { Context } from "../context/index.js";
import { useNavigate } from "react-router-dom";
import "./index.css"

function SelectedDishes() {
    const navigate = useNavigate();
    const { votes } = useContext(Context);
    const decsending = votes.reverse();
    console.log(decsending);
    return (
        <div className="row d-flex align-items-center flex-column selected-dish">
            <div className="my-5 col-sm-5 col-md-3 cont-dish">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Dish Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {decsending.map((item, index) => {
                            return (
                                <tr>
                                    <th scope="row">{decsending.length - index}</th>
                                    <td>{item}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <button
                className="btn btn-warning"
                style={{ width: "140px" }}
                onClick={() => navigate("/main")}
            >
                Go back
            </button>
        </div>
    );
}

export default SelectedDishes;
