import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="row align-items-center justify-content-center">
            <h4 className="text-dark text-center fw-bold d-flex align-items-center justify-content-center">
                <Image src={"/img/load.png"} width={"40"} height={"40"} alt="load"/> Load board
            </h4>
            <p className="text-center col-lg-8">
                You can fill out an application for a package from the site. We will receive your application and respond to it.
            </p>
        </div>
    </div>
  )
}

export default Header