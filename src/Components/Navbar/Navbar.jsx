import React from "react";

function Navbar() {
    return (
        <>

            <div className="flex justify-between items-center  py-10 px-20 h-30">
                <div className="text-white text-3xl" style={{ fontFamily: "outlet" }}>Ev-olution</div>
                <ul className="flex gap-10 items-center">
                    <li className="text-white" style={{ fontFamily: "poppins" }}>Home</li>
                    <li className="text-white" style={{ fontFamily: "poppins" }} >Explore</li>
                    <li className="text-white" style={{ fontFamily: "poppins" }}>About</li>
                    <li className="text-black bg-white h-8 flex items-center px-5 rounded-2xl " style={{ fontFamily: "poppins" }}>Contact</li>
                </ul>
            </div>

        </>
    );
}
export default Navbar;