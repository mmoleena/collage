import React from 'react';
import './Layout2.css';
import DefaultBox from '../DefaultBox';
function Layout2({borderRadius}){
    return(
        <div className="layout2">
            <div className="row">
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            </div>
            <div className="row">
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            </div>
            <div className="row">
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout2;