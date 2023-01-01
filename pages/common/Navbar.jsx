import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src={"/img/logo.png"} alt={"logo"} width={"350px"} height={"72px"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Agents</a>
                        <a className="nav-link" href="#">Office #34 | to 30kg</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar