import React from 'react';
import Plus from '../Assets/plus.png';
function DefaultBox({borderRad, width, height}){
    const plusleft = (Number(width.slice(0,3))/2).toString();
    console.log(plusleft);
    const imageStyle = {
        borderRadius : borderRad,
        width: width,
    }
    const handleWidth = {
        position : 'relative',
        left : plusleft,
    }
    const divStyleUploaded={
        borderRadius : borderRad,
        width: width,
        height: height
    }
    const divStyle={
        backgroundColor:"rgb(235, 235, 235)",
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
        <div style={image ? divStyleUploaded : divStyle } className="handleOverFlow" onClick={handleClick}>
            {
            image ? 
                <div>
                    <img 
                        width="1000"
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
                <div className="plus" style={handleWidth}>
                        <img 
                            src={Plus} 
                            width="50"
                            alt=""
                        />
                </div>
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

export default DefaultBox;