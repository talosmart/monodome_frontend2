import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    // <section>
        
        <div className="col-auto col-md-3 col-xl-3 px-sm-2 p-5 px-0 bg-success" id='sidebar' style={{borderRadius:"8px"}}>
            <div className="row flex-column align-items-center justify-content-center align-items-sm-start px-2 p-2 text-white">
                <a href="#" className="d-flex col-12 justify-content-center align-items-center pb-3 mb-md-0 w-100 text-center me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline text-center">Our Services</span>
                </a>
                <hr className='text-white fw-bold' />
                <ul className="nav nav-pills row flex-column mb-sm-auto mb-0 align-items-center justify-content-center text-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0 row align-items-center justify-content-center">
                            <i className="fs-4 bi bi-archive"></i> <span className="ms-1 d-none d-sm-inline">Monolog</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle row align-items-center justify-content-center">
                        <i className="fs-4 fa-light fa-fork-knife"></i> <span className="ms-1 d-none d-sm-inline">Monofood</span> </a>
                        
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle row align-items-center justify-content-center">
                        <i className="fs-4 bi bi-car-front-fill"></i> <span className="ms-1 d-none d-sm-inline">Monoride</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle row align-items-center justify-content-center">
                            <i className="fs-4 bi bi-heart-pulse"></i> <span className="ms-1 d-none d-sm-inline">Monohealth</span></a>
                    
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle row align-items-center justify-content-center">
                            <i className="fs-4 bi bi-building"></i> <span className="ms-1 d-none d-sm-inline">Real Estate</span> </a>
                            
                    </li>
                    <li>
                        <Link href='/loads'>
                            <a href="#" className="nav-link px-0 align-middle row align-items-center justify-content-center">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Load board</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    // </section>
  )
}

export default Sidebar