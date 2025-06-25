"use client"

import { useEffect } from "react";
import { animateHeaderAndNav, animatePepsiScroll, animateHeading, animateLines,animateShapes,animateTextScroll,animatePepsi,animateStamp } from "@/lib/gsapAni";
import "./home.css"
import Header from "@/components/header";
import Image from 'next/image';
export default function HomeL() {

    useEffect(() => {
        animateHeaderAndNav();
        animatePepsiScroll();
        animateHeading();
        animateLines();
        animateShapes();
        animateTextScroll();
        animatePepsi();
        animateStamp();
  }, []);
  return (
    <>
        <Header/>
        <div id="box1">
        <Image id="mount" src="/new-2.png" alt="Mountain" width={800} height={600} />
        <h1 id="heading">
            <span className="line" id="head1">CLIMB</span>
          <span className="line highlight" id="head2">WITHIN</span>
        </h1>
        <img id="pepsi" src="campfire.png"/>
        {/* <img id="stamp" src="camp2.png"/>  */}
    </div>



    <div id="box2">

        <video autoPlay muted loop playsInline id="video">
            <source src="video.mp4" type="video/mp4"/>
        </video>

        <div className="notebook-container">
            
            <p id="text">
                <span>Welcome to a place where mountains </span>
                <span>are more than just landscapes.</span>
                <span>Here, every trail teaches you courage.</span>
            </p>
        </div>

        
    </div>




    <div id="box3">
        <div id="about-main">
                <div className="wrapper">
                    <h1 className="title" >WHO ARE WE</h1>
                </div>
        <p id="about-p">The Climb Within designs reflective, experiential learning journeys that integrate play, outdoor adventure, 
            and personal reflection. Our programs blend cognitive, emotional, and practical engagement to foster personal growth, 
            team synergy, and leadership development. Rooted in discovery and intentional change, each experience encourages deep 
            connection with self, others, and the environment, facilitating meaningful and transferable learning outcomes.</p>
            </div>
            
        <div id="shapes">
            <img src="shape1.png" id="sha1"/>
            <img src="shape2.png" id="sha2"/>
            <h2 id="about-head">Our Story</h2>
        <p id="about-p2">Founded with a vision to transform traditional education paradigms, the School of Learning emerged from the collective
             experience of educators who believed that learning should be engaging, meaningful, and transformative. <br/><br/>
           Our journey began with a simple observation: students learn best when they are actively engaged, challenged appropriately, 
           and supported in their growth. This insight led us to develop innovative programs that combine academic rigor with 
           experiential learning, outdoor education, and personal development. <br/><br/>
           Today, we work with schools and colleges across multiple locations, bringing our unique approach to thousands of students 
           and educators. Our team of certified facilitators brings diverse expertise from education, psychology, adventure sports, 
           and organizational development.</p>

        </div>

        <h2 id="about-head2">Foundations of Our Work</h2>
        <div id="outer-1">
            <div className="container">
                
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                
                
                <div className="glass-card">
                    <img src="s1.png" className="logo"/>
                    <h2>Student-Centered Approach</h2>
                    <p>Every program is designed with the student at the center, recognizing individual learning styles, needs, and potential.</p>
                </div>
            </div>

            <div className="container">
                
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                
                
                <div className="glass-card">
                    <img src="s2.png" className="logo"/>
                    <h2>Excellence in Education</h2>
                    <p>We maintain the highest standards in our programs, continuously improving and adapting to best serve our learners.</p>
                </div>
            </div>
        </div>
        <div id="outer-2">
            <div className="container">
                
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                
                
                <div className="glass-card">
                    <img src="s3.png" className="logo"/>
                    <h2>Inclusive Learning</h2>
                    <p>We create inclusive environments where every learner feels valued, respected, and empowered to succeed.</p>
                </div>
            </div>

            <div className="container">
                
                <div className="bg-circle circle-1"></div>
                <div className="bg-circle circle-2"></div>
                
               
                <div className="glass-card">
                    <img src="s4.png" className="logo"/>
                    <h2>Continuous Innovation</h2>
                    <p>We embrace new methodologies, technologies, and approaches to enhance the learning experience.</p>
                </div>
            </div>
        </div>

        
    </div>
    </>
  );
}