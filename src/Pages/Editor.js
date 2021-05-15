import React from 'react';
import EditorSpace from '../Editor/EditorSpace';
import { ChromePicker } from 'react-color';
import Slider from '@material-ui/core/Slider';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';
import { Button, Dialog, Drawer, Slide } from '@material-ui/core';
import Layout2 from '../Assets/layout2.png';
import Layout3 from '../Assets/layout3.png';
import Layout4 from '../Assets/layout4.png';
import Layout5 from '../Assets/layout5.png';
import Layout6 from '../Assets/layout6.png';
import Layout7 from '../Assets/layout7.png';
import Layout8 from '../Assets/layout8.png';
import Layout9 from '../Assets/layout9.png';
import Layout10 from '../Assets/layout10.png';
import Music from '../Assets/music/images.png';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>
  });

function Editor(){

    const [layout, setlayout] = React.useState("layout2")

    const handleLayoutChange = (num) => {
        setlayout(`layout${num}`);
        handleClose();
    }

    const [open, setOpen] = React.useState(false);
    

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const handleOpenDrawer = () => {
        setOpenDrawer(true);
    }

    const handleCloseDrawer = () => {
        setOpenDrawer(false);
    }

    const [bgColor, setBgColor] = React.useState("#ffffff");
    const [borderRadius, setBorderRadius] = React.useState(10);

    const handleBgChange = (color) => {
        setBgColor(color.hex)
    }
    const handleRadiusChange = (event, newValue) => {
        setBorderRadius(newValue);
    }

    function div2Img(){
        var scale = 2;
        domtoimage.toBlob(document.getElementById('collage'),{
            width: document.getElementById('collage').clientWidth * scale,
            height: document.getElementById('collage').clientHeight * scale,
            style: {
                transform: 'scale('+scale+')',
                transformOrigin: 'top left'
            }
        })
        .then(function(blob) {
            FileSaver.saveAs(blob, 'mynode.png');
        });
    }

    return(
        <div className="editor">
            {/* <div className="drawerButton" onClick={handleOpenDrawer}>
                <img
                    src={Music}
                    width="40"
                    alt="music"
                />
            </div> */}
            <div>
                <div className="editorButton" onClick={handleOpen}>
                    Set Layout
                </div>
                <div className="colorPkr">
                    <div className="colorPkrLabel">Set Background Color</div>
                    <ChromePicker 
                        color={bgColor}
                        onChangeComplete={handleBgChange}
                    />
                </div>
                <div className="colorPkr">
                    <div className="colorPkrLabel">Choose Border Radius</div>
                    <Slider onChange={handleRadiusChange}/>
                </div>
            </div>
            <div>
                <EditorSpace bgColor={bgColor} borderRadius={borderRadius} layout={layout}/>
                <div className="editorButton" onClick={div2Img} >
                    Download
                </div>
            </div>
            
            <Dialog
                open={open}
                TransitionComponent={Transition}

            >
                <div className="layoutSelector">
                    <div className="layoutList">
                        <div className="layoutListitem" onClick={() => handleLayoutChange("2")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout2}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("3")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout3}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("4")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout4}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("5")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout5}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("6")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout6}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("7")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout7}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("8")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout8}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("9")}>
                            <img 
                                className="layoutImg"
                                width="100"
                                src={Layout9}
                                alt="layout2"
                            />
                        </div>
                        <div className="layoutListitem" onClick={() => handleLayoutChange("10")}>
                        <img 
                                className="layoutImg"
                                width="100"
                                src={Layout10}
                                alt="layout2"
                            />
                        </div>
                    </div>
                    <div style={{ width : "fit-content" , margin:"0 auto", marginTop:"20px"}}>
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </div>
                
            </Dialog>
            <Drawer 
                open={openDrawer}
                anchor="left"
                onClose={handleCloseDrawer}
            >
                Hey
            </Drawer>
        </div>
    );
}

export default Editor;