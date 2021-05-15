import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout10.css';

function Layout10({borderRadius}){
    return(
        <div>
            <div className="row">
                <DefaultBox  width="166px" height="189px" borderRad={borderRadius}/>
                <DefaultBox  width="332px" height="189px" borderRad={borderRadius}/>
            </div>
            <div className="row">
                <DefaultBox  width="166px" height="189px" borderRad={borderRadius}/>
                <DefaultBox  width="166px" height="189px" borderRad={borderRadius}/>
                <DefaultBox  width="166px" height="189px" borderRad={borderRadius}/>
            </div>
        </div>
    );
}

export default Layout10;