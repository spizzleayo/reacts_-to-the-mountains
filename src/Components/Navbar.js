import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
    const [click, setclick] = useState(false);
    const [button, setbutton] = useState(true);
    
    const menuHandler=()=>{setclick(!click);}

    const closeMobileMenu=()=>{setclick(false);}

    const showButton=()=>{
        if(window.innerWidth<=960){
            setbutton(false);
        }
        else setbutton(true);
    }

    useEffect(()=>{
        showButton();
    },[]);

    document.addEventListener("resize",showButton);


    return (
        <>  
            <nav className="nav">
            <div className='nav-container'>
                <Link to='/' className="nav-logo">
                    Website<i class="ri-remixicon-line" />
                </Link>
                <div className="nav-menu-icon" onClick={menuHandler}>
                    <i className={click ? "ri-close-line" : "ri-menu-line"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/' className="nav-links-signup" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button btnStyle='btn-secondary'>Sign up</Button>}
            </div>
            </nav>
        </>
    )
}