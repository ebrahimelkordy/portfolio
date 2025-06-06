import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ImageME from "../../assets/5000.jpg"
function About() {
    return (
        <section className='about' id='about'>
            <div className='top_section'>
                <h5>Get To Know</h5>
                <h2>About Me</h2>
            </div>
            <div className='container about_container'>
                <div className='about_me'>
                    <div className='about_me-img'>
                        <img src={ImageME} alt='About Me' />
                    </div>
                </div>
                <div className='about_content'>
                    <div className='about_cards'>
                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h5>Experience</h5>
                            <small>Junior</small>
                        </article>
                        {/* <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article> */}
                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>
                    <p>Through building various small to mid-sized projects, I’ve been sharpening my skills and gaining real-world experience to grow steadily as a full-stack developer.</p>
                    <a href='#contacts' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
