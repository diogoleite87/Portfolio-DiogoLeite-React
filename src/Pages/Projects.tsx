import ContainerProjects from '../components/Projects'
import React from 'react'

function Projects() {
    return (
        <>
            <React.Suspense fallback={<h2>Loading...</h2>}>
            <ContainerProjects/>
            </React.Suspense>
        </>

    )
}

export default Projects