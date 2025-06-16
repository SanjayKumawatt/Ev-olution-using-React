import React from "react";
import video1 from "../../Assets/video1.mp4";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";

function Background(props) {



    if (props.playStatus) {
        return (
            <video className="float-left z-0 fixed" loop autoPlay muted style={{ zIndex: -1 }} >
                <source src={video1} type="video/mp4" />
            </video>
        );
    }
    else if (props.heroCount === 0) {
        return <img className="w-full h-full fixed object-cover fade-in " style={{ zIndex: -1 }} src={image1} />

    }
    else if (props.heroCount === 1) {
        return <img src={image2} className="w-full h-full fixed object-cover fade-in  " style={{ zIndex: -1 }} />

    } else if (props.heroCount === 2) {
        return <img src={image3} className="w-full h-full fixed object-cover z--1 fade-in  " style={{ zIndex: -1 }} />

    }
}
export default Background;