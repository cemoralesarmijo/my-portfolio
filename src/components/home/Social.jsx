import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a href={process.env.REACT_APP_LINK_GITHUB} className="home__social-icon" target="_blank">
                <i className="uil uil-github uil-social"></i>
            </a>
            <a href={process.env.REACT_APP_LINK_LINKEDIN} className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin uil-social"></i>
            </a>
            <a href="https://www.instagram.com/" className="home__social-icon " target="_blank">
                <i className="uil uil-instagram-alt uil-social"></i>
            </a>
        </div>
    )
}


export default Social;