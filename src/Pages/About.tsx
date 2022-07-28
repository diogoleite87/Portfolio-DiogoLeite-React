import ContainerAbout from "../components/About"
import React from "react"

function Home() {
    return (
        <>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <ContainerAbout />
            </React.Suspense>
        </>

    )
}

export default Home