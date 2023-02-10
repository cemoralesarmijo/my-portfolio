import React from 'react';
const mail = process.env.REACT_APP_HOME_MAIL_BUTTON_TEXT
function Mailto({ email, subject, body, ...props }) {
    return (
        <a
            href={`mailto:${mail}?subject=${subject || ""}&body=${body || ""}`}
            className="home__social-icon">
            {props.children}
            <i className='uil uil-envelope-edit uil-social'></i>
        </a>
    );
}


const Social = () => {
    return (
        <div className="home__social">
            <a href={process.env.REACT_APP_LINK_GITHUB} className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-github uil-social"></i>
            </a>
            <a href={process.env.REACT_APP_LINK_LINKEDIN} className="home__social-icon" target="_blank" rel="noreferrer">
                <i className="uil uil-linkedin uil-social"></i>
            </a>
            <Mailto email="" subject="Hello" body="" />
        </div>
    )
}


export default Social;