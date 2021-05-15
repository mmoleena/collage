import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout5.css';

function Layout5({borderRadius}){
    return(
        <div className="layout5">
            <div className="side">
                <DefaultBox width="249px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="126px" borderRad={borderRadius}/>
            </div>
            <div className="side">
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout5;