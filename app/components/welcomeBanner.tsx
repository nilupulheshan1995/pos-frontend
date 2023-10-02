import React from 'react'

type Props = {
    handleShow:() => void;
}

function WelcomeBanner({ handleShow }: Props) {
    return (
        <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there POS System</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button onClick={handleShow} className="btn btn-primary">Get Started</button>
        </div>
    )
}

export default WelcomeBanner