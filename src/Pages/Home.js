import React from 'react';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="leftHome">
            <img 
                src={Logo} 
                alt="" 
                className="logo"
            />

            <Link to="/editor" style={{textDecoration:"none"}}>
                <div className="getStarted" >
                    Get Started
                </div>
            </Link>
      </div>
    );
}

export default Home;