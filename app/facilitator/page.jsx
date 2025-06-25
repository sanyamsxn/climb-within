"use client"

import "./facilitator.css"
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "@/components/header";

export default function Facilitator(){

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".item").forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -150 : 150, // alternate left/right
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 97%",
          toggleActions: "play none none none",
        },
        delay: i * 0.02,
      });
    });
  }, []);
    return (
        <>
            <Header/>
            <div id="facilitator">
        <div id="facilitator-top">
            <h1>Meet Our Facilitators</h1>
            <p>Our team of experienced educators, adventure specialists, and certified facilitators brings diverse expertise and passion for transformative learning experiences.</p>
        </div>

        <div class="facilitator-profile">
            <div class="profile-1">
                <div class="profile-pic">
                    <img src="ashish.jpeg"/>
                </div>

                <div class="profile-info">
                    <div class="info-top">
                        <h2>Mr Ashish Saxena</h2>
                        <div class="info-links">
                            <div class="link"><a href=""> <img class="img-1" src="linkedin.png"/></a></div>
                            <div class="link"><a href=""> <img class="img-2" src="link.png"/></a></div>
                        </div>
                    </div>
                    <h3>Lead Educational Facilitator</h3>
                    <h4>10+ years experience</h4>
                    <p>With over [X years] of experience in the education sector, [Employee Name] has dedicated his career to improving learning opportunities in mountain and remote regions. His deep understanding of the unique challenges faced by communities in high-altitude areas has helped shape impactful educational initiatives and outreach programs. Passionate about inclusive, community-driven learning, he continues to work towards bridging educational gaps, fostering skill development, and empowering young minds in underserved regions..</p>
            
                    <div class="info-bottom">
                        <h2><img src="exped.png"/> &nbsp; Notable Expeditions</h2>
                        <div class="tags"> 
                            <h2>Himalayan Base Camp Trek </h2>
                            <h2>Kilimanjaro Summit </h2>
                            <h2>Patagonia Expedition</h2>

                        </div>
                    </div>
                </div>
            </div>


            <div class="profile-1" >
                <div class="profile-pic">
                    <img src="renu.jpeg"/>
                </div>

                <div class="profile-info">
                    <div class="info-top">
                        <h2>Miss Renu Sharma</h2>
                        <div class="info-links">
                            <div class="link"><a href=""> <img class="img-1" src="linkedin.png"/></a></div>
                            <div class="link"><a href=""> <img class="img-2" src="link.png"/></a></div>
                        </div>
                    </div>
                    <h3>Lead Educational Facilitator</h3>
                    <h4>10+ years experience</h4>
                    <p>With over [X years] of experience in the education sector, [Employee Name] has dedicated his career to improving learning opportunities in mountain and remote regions. His deep understanding of the unique challenges faced by communities in high-altitude areas has helped shape impactful educational initiatives and outreach programs. Passionate about inclusive, community-driven learning, he continues to work towards bridging educational gaps, fostering skill development, and empowering young minds in underserved regions..</p>
            
                    <div class="info-bottom">
                        <h2><img src="exped.png"/> &nbsp; Notable Expeditions</h2>
                        <div class="tags"> 
                            <h2>Himalayan Base Camp Trek </h2>
                            <h2>Kilimanjaro Summit </h2>
                            <h2>Patagonia Expedition</h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>


       

        <div id="gallery">
            <h1>Peak Pixels</h1>

            
            <div class="container">
                <div class="big item">
                    <img src="/photos/1.jpeg" alt=""/>
                </div>
                <div class="item" >
                    <img src="/photos/2.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/3.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/4.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/5.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/6.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/7.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/8.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/9.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/10.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/11.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/12.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/13.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/14.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/15.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/16.jpeg" alt=""/>
                </div>
                <div class="big item">
                    <img src="/photos/17.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/18.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/19.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/20.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/21.jpeg" alt=""/>
                </div>
                <div class="item">
                    <img src="/photos/22.jpeg" alt=""/>
                </div>
                <div class=" big item">
                    <img src="/photos/23.jpeg" alt=""/>
                </div>

            </div>
        </div>
    </div>

    

        </>
    )
}