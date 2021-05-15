import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout3.css';

function Layout3({borderRadius}){
    return(
        <div>
            <div className="row">
                <div>
                    <DefaultBox width="332px" height="252px" borderRad={borderRadius}/>
                </div>
                <div>
                    <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
                    <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
                </div>
            </div>
            <div className="row">
                <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
                <DefaultBox width="166.66px" height="126px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout3;