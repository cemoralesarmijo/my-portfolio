import React from 'react';
import './experience.css'

function Experience() {
    return (
        <section className="section" id="experience">
            <br/>
            <div className="experience-content">
                <h2 className="experience-title">Experience</h2>
                <div className="current">
                    { process.env.REACT_APP_CURRENT_STATE}
                </div>
                <div className="experience-grid">
                    <div className="empty"></div>
                    <div className="line"></div>
                    <div className="experience">
                        <div className="experience-date">{process.env.REACT_APP_EXPERIENCE_JOOYCAR_DATE}</div>
                        <div className="experience-company">{process.env.REACT_APP_EXPERIENCE_JOOYCAR_COMPANY_NAME}</div>
                        <div className="experience-position">{process.env.REACT_APP_EXPERIENCE_JOOYCAR_ROL}</div>
                        <div className="experience-description">{process.env.REACT_APP_EXPERIENCE_JOOYCAR_DESCRIPTION}</div>
                    </div>
                    <div className="experience experience-left">
                        <div className="experience-date">{process.env.REACT_APP_EXPERIENCE_KIBERNUM_DATE}</div>
                        <div className="experience-company">{process.env.REACT_APP_EXPERIENCE_KIBERNUM_COMPANY_NAME}</div>
                        <div className="experience-position">{process.env.REACT_APP_EXPERIENCE_KIBERNUM_ROL}</div>
                        <div className="experience-description">{process.env.REACT_APP_EXPERIENCE_KIBERNUM_DESCRIPTION}</div>
                    </div>
                    <div className="line"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="line"></div>
                    <div className="experience">
                        <div className="experience-date">{process.env.REACT_APP_EXPERIENCE_HUENEI_DATE}</div>
                        <div className="experience-company">{process.env.REACT_APP_EXPERIENCE_HUENEI_COMPANY_NAME}</div>
                        <div className="experience-position">{process.env.REACT_APP_EXPERIENCE_HUENEI_ROL}</div>
                        <div className="experience-description">{process.env.REACT_APP_EXPERIENCE_HUENEI_DESCRIPTION}</div>
                    </div>
                    <div className="experience experience-left">
                        <div className="experience-date">{process.env.REACT_APP_EXPERIENCE_AGENCE_DATE}</div>
                        <div className="experience-company">{process.env.REACT_APP_EXPERIENCE_AGENCE_COMPANY_NAME}</div>
                        <div className="experience-position">{process.env.REACT_APP_EXPERIENCE_AGENCE_ROL}</div>
                        <div className="experience-description">{process.env.REACT_APP_EXPERIENCE_AGENCE_DESCRIPTION}</div>
                    </div>
                    <div className="line"></div>
                    <div className="empty"></div>
                    <div className="empty"></div>
                    <div className="line"></div>
                    <div className="experience">
                        <div className="experience-date">{process.env.REACT_APP_EXPERIENCE_METS_DATE}</div>
                        <div className="experience-company">{process.env.REACT_APP_EXPERIENCE_METS_COMPANY_NAME}</div>
                        <div className="experience-position">{process.env.REACT_APP_EXPERIENCE_METS_ROL}</div>
                        <div className="experience-description">{process.env.REACT_APP_EXPERIENCE_METS_DESCRIPTION}</div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;