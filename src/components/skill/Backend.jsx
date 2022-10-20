import React from 'react';
const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">NodeJS</h3>
                            {/*<span className="skills__level">Advance</span>*/}
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            {/*<span className="skills__level">Advance</span>*/}
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <i className='bx bx-badge-check'></i>
                        </div>

                        <div>
                            <h3 className="skills__name">MongoDB</h3>
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
                            <h3 className="skills__name">Mysql</h3>
                            {/*<span className="skills__level">Intermediate</span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;