import React from 'react'
//import { FaCode } from "react-icons/fa";
import Calendar from 'react-calendar';

function LandingPage() {
    return (
        <>
        <div className="app" style={{alignItems:'center',height:'80%',width:'80%'}}>
            {/* <FaCode style={{ fontSize: '4rem' }} /><br /> */}
            <Calendar/>
        </div>
        </>  


    )
}

export default LandingPage
