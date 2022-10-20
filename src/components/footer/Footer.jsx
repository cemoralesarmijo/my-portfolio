import React from 'react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                {/*<h1 className="footer__title">César</h1>*/}
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Home</a>
                        <a href="#about" className="footer__link">About</a>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>
                 <div className="footer__social">
                     <a href="https://linkedin.com/" className="footer__social-link" target="_blank">
                         <i className="uil uil-linkedin"></i>
                     </a>
                     <a href="https://github.com/" className="footer__social-link" target="_blank">
                         <i className="uil uil-github"></i>
                     </a>
                     <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                         <i className="uil uil-instagram-alt"></i>
                     </a>
                 </div>
                {/*<span className="footer__copy">*/}
                {/*    cemorales.me*/}
                {/*</span>*/}
            </div>
        </footer>
    );
};

export default Footer;