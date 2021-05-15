import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout8.css';

function Layout8({borderRadius}){
    return(
        <div className="layout8">
            <div>
                <DefaultBox width="166px" height="252px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
            </div>
            <div>   
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="252px" borderRad={borderRadius}/>
            </div>
            <div>
                <DefaultBox width="166px" height="252px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="126px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout8;