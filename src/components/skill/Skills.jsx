import React from 'react';
import "./skills.css"
const backendTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_BACKEND)
const frontendTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_FRONTEND)
const commonLibsTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_COMMON_LIB)
const cloudComputerToolsTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_CLOUD_TOOLS_COMPUTER)
const devToolsTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_DEV_TOOLS)
const workToolsMethodologyTags = JSON.parse(process.env.REACT_APP_SKILLS_TAGS_WORK_METHODOLOGY)

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="custom-section-title">
                <i className="fa-regular fa-laptop-code text"></i>
                <span className="text">Skills & tools</span>
            </div>

            <div className="card-skill-container">
                <div className="card" >
                    <h2>Backend</h2>
                    {
                        backendTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                    <h2>Frontend</h2>
                    {
                        frontendTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                    <h2>Common tools & development library</h2>
                    {
                        commonLibsTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                    <h2>Cloud & Computers tools</h2>
                    {
                        cloudComputerToolsTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                    <h2>Developer tools & IDE</h2>
                    {
                        devToolsTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                    <h2>Work methodology and tools</h2>
                    {
                        workToolsMethodologyTags.map( data  => {
                            return  <span className="stack">{data}</span>
                        })

                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;