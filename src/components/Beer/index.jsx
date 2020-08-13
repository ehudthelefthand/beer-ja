import React from "react";
import './styles.css';
import {Link} from "react-router-dom";

const Beer = ({ beer }) => {
    return (
        <div className="card">
            <Link to={`/beer-detail/${beer.id}`}>
                <picture className="thumbnail">
                    <img alt="" src={`data:image/png;base64,${beer.image}`} />
                </picture>
                <div className="card-content">
                    <h4>{beer.name}</h4>
                    <p>
                        {beer.brand}
                    </p>
                </div>
            </Link>
        </div>
    )
};

export default Beer;