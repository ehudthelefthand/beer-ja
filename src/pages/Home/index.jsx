import React, {useEffect, useState} from "react";
import BeerList from "../../components/BeerList";
import {getBeers} from "../../services/beer.service";
import "./styles.css";


const Home = () => {
    const [beers, setBeers] = useState([]);
    useEffect(() => {
        getBeers()
            .then(beers => setBeers(beers))
            // .catch(err => alert(err));
    }, []);

    return (
        <div className="centered">
            <BeerList beers={beers}/>
        </div>
    );
};

export default Home;