import ContainerContact from "../components/Contact"
import React from "react"

function Contact() {
    return (
        <>
            <React.Suspense fallback={<h2>Loading...</h2>}>
                <ContainerContact />
            </React.Suspense>
        </>

    )
}

export default Contact