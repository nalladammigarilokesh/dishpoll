import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/index.js";

function Header() {
    const navigate = useNavigate();
    const { votes } = useContext(Context);

    const handleResult = () => {
        navigate("/result");
    };
    return (
        <div className="nav sticky-top py-4">
            <button
                className="nav-item btn w-50 m-auto btn-cstm"
                disabled={votes.length === 0 ? true : false}
                onClick={handleResult}
            >
                Result
            </button>
        </div>
    );
}

export default Header;
