import React, { useState } from 'react'
import "./header.css";
const Header = () => {
    // change background header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 560 ) header.classList.add("show-header")
        else header.classList.remove("show-header")
    })

    const[Toggle, showMenu] = useState(false)
    const [acticeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">César</a>

                <div className={Toggle ? "nav__menu show-manu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                               onClick={() => setActiveNav('#home')}
                               className={
                                acticeNav === "#home"
                                    ? "nav__link active-link"
                                    : "nav__link"
                                }
                            >
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#about"
                                onClick={() => setActiveNav('#about')}
                                className={
                                    acticeNav === "#about"
                                        ? "nav__link active-link"
                                        : "nav__link"
                            }
                            >

                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#skills"
                                onClick={() => setActiveNav('#skills')}
                                className={
                                    acticeNav === "#skills"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#testimonial"
                                onClick={() => setActiveNav('#testimonial')}
                                className={
                                    acticeNav === "#testimonial"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i> Testimonials
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu((!Toggle))}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu((!Toggle))}>
                    <a href="#" className="nav__link">
                        <i className="uil uil-apps"></i>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header