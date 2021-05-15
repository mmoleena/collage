import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout7.css';

function Layout7({borderRadius}){
    return(
        <div className="layout7">
            <div>
                <DefaultBox width="249px" height="252px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="126px" borderRad={borderRadius}/>
            </div>
            <div>
                <DefaultBox width="249px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="252px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout7;