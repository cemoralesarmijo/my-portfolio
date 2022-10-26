import React from 'react';
import Info from "./Info";
import "./about.css"

const About = () => {
    const linkToCv = process.env.REAC__APP__ABOUT__CV_LINK
    const linkAboutPhoto = process.env.REACT_APP_ABOUT_PROFILE_IMAGE
    const aboutDescription = process.env.REACT_APP_ABOUT_DESCRIPTION
    return (
        <section className="about section" id="about">
            <div className="custom-section-title">
                <i className='bx bx-user-pin text'></i>
                <span className="text">About me</span>
            </div>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={linkAboutPhoto}  className="about__img" alt=""/>
                <div className="about__data">
                    <Info />
                    <p className="about__description">{aboutDescription}</p>
                    <a  download="cesar_morales_armijo_cv" href={`${linkToCv}`} className="button button--flex">
                        Download CV
                        <i className='bx bxs-file'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;