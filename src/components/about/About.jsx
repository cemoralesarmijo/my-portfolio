import React from 'react';
import "./about.css"

const About = () => {
    const linkToCv = process.env.REACT_APP_ABOUT_CV_LINK
    const aboutData = JSON.parse(process.env.REACT_APP_ABOUT_DESCRIPTION_TEXT)
    console.log(process.env.REACT__APP__ABOUT__CV_LINK)
    return (
        <section className="about-section section" id="about">
            <br/>
            <div className="custom-section-title">
                <i className="fa-regular fa-laptop-code text"></i>
                <span className="text">About me</span>
            </div>
            <div className="container-about grid">

                <div className='about-photo-container'>

                        <img className='pic' src={process.env.REACT_APP_ABOUT_PROFILE_IMAGE_1} alt="" id='pic3' />


                        <img className='pic' src={process.env.REACT_APP_ABOUT_PROFILE_IMAGE_2} alt="" id='pic2' />


                        <img className='pic' src={process.env.REACT_APP_ABOUT_PROFILE_IMAGE_3} alt="" id='pic1' />

                </div>
                <div className="about-container-box-resume">
                    <div className="about-box-resume">
                        <i className='bx bx-award about__icon'></i>
                        <h3 className="about__title">Experiencie</h3>
                        <span className="about__subtitle">8 year Working</span>
                    </div>
                    <div className="about-box-resume">
                        <i className='bx bx-briefcase-alt about__icon'></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">7 + Projects</span>
                    </div>
                    <div className="about-box-resume">
                        <i className='bx bx-code-alt about__icon'></i>
                        <h3 className="about__title">Experience in</h3>
                        <span className="about__subtitle">Backend / frontend</span>
                    </div>
                    <div className="button-download-cv"><a  download="cesar_morales_armijo_cv" href={`${linkToCv}`} className="button btn-icon">
                        Download CV
                        <i className='bx bxs-file'></i>
                    </a></div>
                </div>
                <div className="about-container-description">
                    <p className="about__description">
                        {
                            aboutData.map( data  => {
                                return <p>{data}</p>
                            })

                        }
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;