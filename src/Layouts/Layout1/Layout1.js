import React from 'react';
import Box from './Box';
import './Layout1.css';
function Layout1({borderRadius}){
    return(
        <div className="layout1">
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
            <Box borderRad={borderRadius}/>
        </div>
    );
}

export default Layout1;