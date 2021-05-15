import React from 'react';
import DefaultBox from '../DefaultBox';
import './Layout4.css';

function Layout4({borderRadius}){
    return(
        <div>
            <div className="layout4">
                <DefaultBox width="166px" height="200px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="200px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="200px" borderRad={borderRadius}/>
            {/* <DefaultBox width="166px" height="378px" borderRad={borderRadius}/> */}
            </div>
            <div className="layout4">
                <DefaultBox width="166px" height="178px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="178px" borderRad={borderRadius}/>
                <DefaultBox width="166px" height="178px" borderRad={borderRadius}/>
            </div>
        </div>
        
    );
}

export default Layout4;