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
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header nav-custom">
            <nav className="nav container">
                <a href="#home" className={"nav__logo",
                    activeNav === "#home"
                        ? "nav__link active-link"
                        : "nav__link"
                }>
                    <i className="uil uil-estate uil-apps-custom"></i>
                </a>

                <div className={Toggle ? "nav__menu show-manu": "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home"
                               onClick={() => setActiveNav('#home')}
                               className={
                                   activeNav === "#home"
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
                                    activeNav === "#about"
                                        ? "nav__link active-link"
                                        : "nav__link"
                            }
                            >

                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#experience"
                                onClick={() => setActiveNav('#experience')}
                                className={
                                    activeNav === "#experience"
                                        ? "nav__link active-link"
                                        : "nav__link"
                                }
                            >

                                <i className="uil uil-user nav__icon"></i> Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#skills"
                                onClick={() => setActiveNav('#skills')}
                                className={
                                    activeNav === "#skills"
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
                                    activeNav === "#testimonial"
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
                    <a  className="nav__link">
                        <i className="uil uil-apps uil-apps-custom"></i>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header