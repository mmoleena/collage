import React from 'react';
import Layout1 from '../Layouts/Layout1/Layout1';
import Layout10 from '../Layouts/Layout10/Layout10';
import Layout2 from '../Layouts/Layout2/Layout2';
import Layout3 from '../Layouts/Layout3/Layout3';
import Layout4 from '../Layouts/Layout4/Layout4';
import Layout5 from '../Layouts/Layout5/Layout5';
import Layout6 from '../Layouts/Layout6/Layout6';
import Layout7 from '../Layouts/Layout7/Layout7';
import Layout8 from '../Layouts/Layout8/Layout8';
import Layout9 from '../Layouts/Layout9/Layout9';


function EditorSpace({bgColor, borderRadius, layout}){

    const bgValue = {
        backgroundColor : bgColor,
        borderRadius : borderRadius
    }

    return(
        // download everythin in this div
        <div className="editorSpace"  >      
            
            <div id="collage" style={bgValue}>
                {
                    layout === "layout2" ? <Layout2 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout3" ? <Layout3 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout4" ? <Layout4 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout5" ? <Layout5 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout6" ? <Layout6 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout7" ? <Layout7 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout8" ? <Layout8 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout9" ? <Layout9 borderRadius={borderRadius}/> : null
                }
                {
                    layout === "layout10" ? <Layout10 borderRadius={borderRadius}/> : null
                }
            </div>
        </div>
            
        
    );
}

export default EditorSpace;
