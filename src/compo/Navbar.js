import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
    
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <>
            <header className={colorChange ? 'header colorChange' : 'header'}>
                
                    <Link  id="logo" to="/">
                       <img src="images/logo-sticky.svg"/>
                    </Link>
                
                <nav className="navbar navbar-expand-lg bg-body-white">
                    <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                               
                                <li className="nav-item ">
                                    <Link className="nav-link active text-success" aria-current="page" to="/about">ABOUT US</Link>
                                </li>
                                
                                <li className="nav-item ">
                                    <Link className="nav-link active text-success" aria-current="page" to="/contact">CONTACT</Link>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active text-success" aria-current="page" href="#">GOKIDO TOOL</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active text-success" aria-current="page" href="#">CITY</a>
                                </li> 
                                <li className="nav-item ">
                                    <a className="nav-link active text-success" aria-current="page" href="#">RESTAURANTS</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-success" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        LANGUAGE
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Hindi</a></li>
                                        <li><hr className="dropdown-divider" /></li>

                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                    
                </nav>




                {/* <nav class="navbar navbar-expand-lg bg-body-tertiary mobilenav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
 */}
                {/* <nav className='navbar'>
                <ul>
                    {/* <Link to ='/'><li>CITY</li></Link>
                    <Link to ='/'><li>RESTAURANTS</li></Link>
                    <Link to ='/'><li>ABOUT US</li></Link>
                    <Link to ='/'><li>GOKIDO TOOL</li></Link>
                    <Link to ='/'><li>CONTACT</li></Link> */}
                {/* <li className='nav-item'>
                        <Link to ="/">CITY </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/">RESTAURANTS</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/">ABOUT US</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/">GOKIDO TOOL</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/">CONTACT</Link>
                    </li>  */}
                {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    LANGUAGE
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    
                                </ul>
                            </li>
                </ul>
            </nav>  */}



            </header>


        </>
    )
}

export default Navbar
