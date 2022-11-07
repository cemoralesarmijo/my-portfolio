import React from 'react';
import "./home.css"
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
    const home_profile = process.env.REACT_APP_HOME_PROFILE_IMAGE
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div  className="home__img"  style={{ background: `url(${home_profile})` }}></div>
                    <Data />
                </div>
            </div>
            <ScrollDown />
        </section>
    );
};

export default Home;