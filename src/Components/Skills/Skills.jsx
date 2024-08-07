import React, { useState } from 'react'
import './skills.css';

export default function Skills() {

    const [skills,setSkills]=useState({"frontend":["","",""]});

  return (
    <div className='skills-wrapper'>
        <h6 className='skills-heading'>Skills</h6>
        <div className='skills-box-model-wrapper'>
            <div className='frontend-skills-wrapper skill-wrapper'>
                <p className='skill-title'>Frontend</p>
                <div className='skills'>
                    {
                        skills["frontend"].map((value)=>{
                            return <div className='skills-img-wrapper'>
                            <div className='skill'>
                                    {value}
                            </div>
                        </div>;
                        })
                    }
                </div>
                
            </div>
            <div className='backend-skills-wrapper skill-wrapper'> 
                <p className='skill-title'>Backend</p>
            </div>
            <div className='db-skills-wrapper skill-wrapper'> 
                <p className='skill-title'>Cloud</p>
            </div>

        </div>
    </div>
  )
}
