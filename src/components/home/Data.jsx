import React from 'react';
const home_description = process.env.REACT_APP_HOME_DESCRIPTION
const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">César Morales Armijo</h1>
            <h3 className="home__subtitle"> Software developer</h3>
            <p className="home__description">
                {home_description}
            </p>
        </div>
    );
};

export default Data;