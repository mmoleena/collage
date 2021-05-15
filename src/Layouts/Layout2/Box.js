import React from 'react';
import Plus from '../../Assets/plus.png';
function Box({borderRad, width, height}){
    const imageStyle = {
        borderRadius : borderRad,
        width: width,
        height: height
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
        <div style={imageStyle} onClick={handleClick}>
            {
            image ? 
                <div>
                    <img 
                        width="166"
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