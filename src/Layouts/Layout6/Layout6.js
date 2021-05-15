import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout6.css';

function Layout6({borderRadius}){
    return(
        <div>
            <div className="row">
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
            </div>
            <div className="row">
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="189px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout6;