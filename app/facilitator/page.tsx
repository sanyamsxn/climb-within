"use client"

import styles from "./facilitator.module.css"
import { motion } from "framer-motion";
import Header from "@/components/header";
import Image from "next/image";

export default function Facilitator(){
    const images = [
    "/photos/1.jpeg",
    "/photos/2.jpeg",
    "/photos/3.jpeg",
    "/photos/4.jpeg",
    "/photos/5.jpeg",
    "/photos/6.jpeg",
    "/photos/7.jpeg",
    "/photos/8.jpeg",
    "/photos/9.jpeg",
    "/photos/10.jpeg",
    "/photos/11.jpeg",
    "/photos/12.jpeg",
    "/photos/13.jpeg",
    "/photos/14.jpeg",
    "/photos/15.jpeg",
    "/photos/16.jpeg",
    "/photos/17.jpeg",
    "/photos/18.jpeg",
    "/photos/19.jpeg",
    "/photos/20.jpeg",
    "/photos/21.jpeg",
    "/photos/22.jpeg",
    "/photos/23.jpeg",
  ];


    return (
        <>
            <div id="headerP">
                <Header/>
            </div>
            <div id={styles.facilitator}>
                <div id={styles.facilitatortop}>
                    <Image className={styles.fac1} src="/photos/male.png"  height={300} width={300} alt=""/>
                    <Image className={styles.fac2} src="/photos/female.png" height={280} width={280} alt=""/>
                    <h1>Meet Our Facilitators</h1>
                    <p>Our team of experienced educators, adventure specialists, and certified facilitators brings diverse expertise and passion for transformative learning experiences.</p>
                </div>

                <div className={styles.facilitatorprofile}>
                    <div className={styles.profile1}>
                        <div className={styles.profilepic}>
                                <Image className={styles.picc}  src="/photos/ashish.jpeg"  height={120} width={120} alt=""/>

                        </div>

                        <div className={styles.profileinfo}>
                            <div className={styles.infotop}>
                                <h2>Mr Ashish Saxena</h2>
                                <div className={styles.infolinks}>
                                    <div className={styles.link}><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a></div>
                                    <div className={styles.link}><a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a></div>
                                </div>
                            </div>
                            <h3>Lead Educational Facilitator</h3>
                            <h4>10+ years experience</h4>
                            <p>With over [X years] of experience in the education sector, [Employee Name] has dedicated his career to improving learning opportunities in mountain and remote regions. His deep understanding of the unique challenges faced by communities in high-altitude areas has helped shape impactful educational initiatives and outreach programs. Passionate about inclusive, community-driven learning, he continues to work towards bridging educational gaps, fostering skill development, and empowering young minds in underserved regions..</p>
                    
                            <div className={styles.infobottom}>
                                <h2><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mountain-icon lucide-mountain"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg> &nbsp; Notable Expeditions</h2>
                                <div className={styles.tags}> 
                                    <h2>Kilimanjaro Summit </h2>
                                    <h2>Patagonia Expedition</h2>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles.profile1} >
                        <div className={styles.profilepic}>
                            <Image className={styles.picc} src="/photos/renu.jpeg"  height={120} width={120} alt=""/>

                        </div>

                        <div className={styles.profileinfo}>
                            <div className={styles.infotop}>
                                <h2>Miss Renu Sharma</h2>
                                <div className={styles.infolinks}>
                                    <div className={styles.link}><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a></div>
                                    <div className={styles.link}><a href=""> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg></a></div>
                                </div>
                            </div>
                            <h3>Lead Educational Facilitator</h3>
                            <h4>10+ years experience</h4>
                            <p>With over [X years] of experience in the education sector, [Employee Name] has dedicated his career to improving learning opportunities in mountain and remote regions. His deep understanding of the unique challenges faced by communities in high-altitude areas has helped shape impactful educational initiatives and outreach programs. Passionate about inclusive, community-driven learning, he continues to work towards bridging educational gaps, fostering skill development, and empowering young minds in underserved regions..</p>
                    
                            <div className={styles.infobottom}>
                                <h2><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00bfff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mountain-icon lucide-mountain"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg> &nbsp; Notable Expeditions</h2>
                                <div className={styles.tags}> 
                                    <h2>Himalayan Base Camp Trek </h2>
                                    <h2>Kilimanjaro Summit </h2>
                                    <h2>Patagonia Expedition</h2>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
       

        

        <div id={styles.gallery}>
            <h1 className="text-center text-3xl  mb-8">Peak Pixels</h1>

            <div className={`${styles.container} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}>
                {images.map((src, i) => (
                <motion.div
                    key={i}
                    className={`item ${i % 5 === 0 ? "big" : ""}`} // just reusing your "big" class logic
                    initial={{ x: i % 2 === 0 ? -150 : 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Image src={src} alt="" width={500} height={400} />
                </motion.div>
                ))}
            </div>
        </div>

    

        </>
    )
}


