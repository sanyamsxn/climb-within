"use client"


import Lottie from "lottie-react"
import mountain from "@/public/animation/lottie.json"
import "./home.css"
import Journey from "@/components/ui/journey";
import ScrollSectionBox from "@/components/ui/offer";
import Header from "@/components/header";

export default function HomeL() {
    return(
        <>  
               <div id="headerP">
                    <Header/>
               </div>
                <div id="home">
                {/* <Image src="/mountains.png" alt="Mountain Image" width={500} height={300} id="cover" /> */}
                    <img id="cover" src="/mount.jpeg"/>

                    <h2>
                        Welcome to a place where mountains are more than just landscapes. Here, every trail teaches you courage.
                    </h2>
               


                    <h1 id="mainHeading">
                        <img src="./logo.png" id="logo"/>
                        <div id="mainH">
                            
                                <span id="first">CLIMB</span>
                                <span>WITHIN</span>
                            
                        </div>
                    </h1>
                </div>





                <div id="about">
                    <div id="leftAbout">
                        <h1>About Us</h1>
                        <p>
                            The Climb Within designs reflective, experiential learning journeys that integrate play, outdoor adventure,
and personal reflection.</p>
<p> Our programs blend cognitive, emotional, and practical engagement to foster personal growth,
team synergy, and leadership development. Rooted in discovery and intentional change, each experience encourages deep
connection with self, others, and the environment, facilitating meaningful and transferable learning outcomes.
                        </p>
                    </div>
                    <div id="rightAbout">
                        <Lottie 
                            animationData={mountain}
                            loop={true}    // or false if you want it to play once
                            className="lottie"
                        />
                    </div>

                </div>



                <div id="journey">
                    <Journey/>
                </div>

                <div id="scroll"> 
                        <ScrollSectionBox/>
                    
                </div>
    </>
    )
    
}









