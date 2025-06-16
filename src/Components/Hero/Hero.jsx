import React from "react";
import arrow_btn from "../../Assets/arrow_btn.png"
import play_icon from "../../Assets/play_icon.png"
import pause_icon from "../../Assets/pause_icon.png"

function Hero(props) {
    return (

        <div className="py-10 px-20" >

            <div className="hero">
                <div className="hero-text ">
                    <p className="text-white text-7xl leading-30 ">{props.heroData.text1}</p>
                    <p className="text-white text-7xl leading-35 ">{props.heroData.text2}</p>
                </div>
                <div className="hero-explore bg-white w-58 rounded-4xl flex cursor-pointer justify-around items-center h-15">
                    <p style={{ fontFamily: "outlet" }} className="mx-2 text-3" >Explore The Features</p>
                    <img className="h-12" src={arrow_btn} alt="" />
                </div>
                <div className="flex justify-between items-center">
                    <ul className="flex gap-3 justify-start items-center mt-4">
                        <li
                            onClick={() => props.setHeroCount(0)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${props.heroCount === 0 ? "bg-orange-400" : "bg-white"}`}
                        ></li>
                        <li
                            onClick={() => props.setHeroCount(1)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${props.heroCount === 1 ? "bg-orange-400" : "bg-white"}`}
                        ></li>
                        <li
                            onClick={() => props.setHeroCount(2)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${props.heroCount === 2 ? "bg-orange-400" : "bg-white"}`}
                        ></li>
                    </ul>
                    <div className="flex items-center gap-4">
                        <img src={props.playStatus ? pause_icon : play_icon} onClick={() => {
                            props.setPlayStatus(!props.playStatus)
                        }} />
                        <p className="text-white ">See vhe video</p>
                    </div>
                </div>


            </div>
        </div>

    );
}
export default Hero;