import React from 'react';
import Backend from './Backend'
import Frontend from './Frontend'
import "./skills.css"
import Computersoftware from "./Computersoftware";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My stack tech level</span>
            <div className="skills__container container grid">
                <Frontend />
                <Backend />

            </div>
        </section>
    );
};

export default Skills;