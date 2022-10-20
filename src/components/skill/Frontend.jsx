import React from 'react';
import "./skills.css"

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title"> Frontend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            {/*<span className="skills__level">Intermediate</span>*/}
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            {/*<span className="skills__level">Intermediate</span>*/}
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            {/*<span className="skills__level">Intermediate</span>*/}
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">Reac JS</h3>
                            {/*<span className="skills__level">Basic</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;