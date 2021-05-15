import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout9.css';

function Layout9({borderRadius}){
    return(
        <div>
            <div className="row">
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
            </div>
            <div className="row">
                <DefaultBox width="249px" height="252px" borderRad={borderRadius}/>
                <DefaultBox width="249px" height="252px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout9;