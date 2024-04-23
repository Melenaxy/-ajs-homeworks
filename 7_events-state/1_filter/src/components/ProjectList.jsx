import React from 'react'

export default function ProjectList({ projects }) {
    return (
        <div className="projects">
            {
                projects.map(project => (
                    <div className='project' key={crypto.randomUUID()}>
                        <img src={project.img} alt="" />
                    </div>
                ))
            }
        </div>
    );
}
