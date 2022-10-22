import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-award about__icon'></i>
                <h3 className="about__title">Experiencie</h3>
                <span className="about__subtitle">8 year Working</span>
            </div>
            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">7 + Projects</span>
            </div>
            <div className="about__box">
                <i className='bx bx-code-alt about__icon'></i>
                <h3 className="about__title">Experience in</h3>
                <span className="about__subtitle">Backend / frontend</span>
            </div>
        </div>
    );
};

export default Info;