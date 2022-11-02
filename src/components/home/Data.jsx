import React from 'react';
const home_description = process.env.REACT_APP_HOME_DESCRIPTION
const mail = process.env.REACT_APP_HOME_MAIL_BUTTON_TEXT

function Mailto({ email, subject, body, ...props }) {
    return (
        <a
            href={`mailto:${mail}?subject=${subject || ""}&body=${body || ""}`}
            className="button button--flex draw">
            {props.children}
            <i className='bx bx-send'></i>
        </a>
    );
}

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">César Morales Armijo</h1>
            <h3 className="home__subtitle"> Software developer</h3>
            <p className="home__description">
                {home_description}
            </p>

            <Mailto email="" subject="Hello" body="">
                Mail me!
            </Mailto>,
        </div>
    );
};

export default Data;