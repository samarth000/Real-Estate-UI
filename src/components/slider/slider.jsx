import { useState } from "react";
import "./slider.scss";

function Slider({images}){
    const [imageIndex, setImageIndex]=useState(null);
    return (
        <div className="slider">
            {imageIndex!==null && (<div className="fullSlider">
                <div className="arrow" onClick={()=>setImageIndex(imageIndex!==0?imageIndex-1:3)}>
                    <img src="/arrow.png" alt=""/>
                </div>
                <div className="imgContainer">
                    <img src={images[imageIndex]} alt=""/>
                </div>
                <div className="arrow" onClick={()=>setImageIndex(imageIndex!==images.length-1?imageIndex+1:0)}>
                    <img src="/arrow.png" alt="" className="right"/>
                </div>
                <div className="close" onClick={()=>setImageIndex(null)}>X</div>
            </div>
        )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
            </div>
            <div className="smallImages">
                {images.slice(1).map((image,index)=>(
                    <img src={image} alt="" key={index} onClick={()=>setImageIndex(index+1)}/>
                ))}
            </div>
        </div>
    )
}
export default Slider;