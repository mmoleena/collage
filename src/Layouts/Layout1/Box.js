import React from 'react';
import './Layout1.css';
import Plus from '../../Assets/plus.png';



function Box({borderRad}){

    const imageStyle = {
        borderRadius : borderRad
    }
    const [image, setImage] = React.useState(null);
    const hiddenFileInput = React.useRef(null);
    const handleClick = () => {   
        hiddenFileInput.current.click();
    }
    const handleChange = event => { 
        const fileUploaded = event.target.files[0];
        setImage(URL.createObjectURL(fileUploaded));
    }

    return(
        <div className={ image ? "boxUploaded" : "box"} style={imageStyle} onClick={handleClick}>
            {
            image ? 
                <div>
                    <img 
                        src={image} 
                        alt=""
                        style={imageStyle}
                    /> 
                    <input type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{display:'none'}}
                    />
                </div>
                
                
                : 
            <div>
                <img 
                    src={Plus} 
                    width="50"
                    alt=""
                    className="plus"
                />
                <input type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display:'none'}}
                />
            </div>
            
            }
        </div>
    );
}

export default Box;