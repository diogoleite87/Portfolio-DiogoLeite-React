import ContainerPresentation from "../components/Presentation"
import React from "react"

function Home() {
    return (
        <>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <ContainerPresentation />
            </React.Suspense>
        </>

    )
}

export default Home