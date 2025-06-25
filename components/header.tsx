"use client"


import  Link  from "next/link";
import "./header.css"
export default function Header() {


  return (
    <section id="header">
        <header id="navhead">
            <div id="brand">
                <h1>ClimbWithin</h1>
            </div>

            <div id="nav">
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><Link href="/#box3">About</Link></li>
                    <li><a href="/facilitator">Facilitators</a></li>
                    <li><a href="/articles">Blogs</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
    </section>
  );
}