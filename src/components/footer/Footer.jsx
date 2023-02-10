import React from 'react';
import "./footer.css"
const mail = process.env.REACT_APP_HOME_MAIL_BUTTON_TEXT
function Mailto({ email, subject, body, ...props }) {
    return (
        <a
            href={`mailto:${mail}?subject=${subject || ""}&body=${body || ""}`}
            className="footer__social-link">
            {props.children}
            <i className='uil uil-envelope-edit uil-social'></i>
        </a>
    );
}
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/*<h1 className="footer__title">César</h1>*/}
                {/*<ul className="footer__list">*/}
                {/*    <li>*/}
                {/*        <a href="#home" className="footer__link">Home</a>*/}
                {/*        <a href="#about" className="footer__link">About</a>*/}
                {/*        <a href="#Experience" className="footer__link">Experience</a>*/}
                {/*        <a href="#skills" className="footer__link">Skills</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                 <div className="footer__social">
                     <a href="https://linkedin.com/" className="footer__social-link" target="_blank">
                         <i className="uil uil-linkedin uil-custom-footer"></i>
                     </a>
                     <a href="https://github.com/" className="footer__social-link" target="_blank">
                         <i className="uil uil-github uil-custom-footer"></i>
                     </a>
                     <Mailto email="" subject="Hello" body="" />
                 </div>
                <div className="footer__social">
                    <a href={process.env.REACT_APP_LINK_GITHUB_PORFOLIO} className="footer__link footer__how_was_build" target="_blank">
                        How I was build :)
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;