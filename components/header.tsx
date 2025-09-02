// "use client"

// import { usePathname } from "next/navigation";
// import  Link  from "next/link";
// import "./header.css"
// export default function Header() {
// const pathname = usePathname();

//   return (
//             <header>
//                     <div id="leftMenu">
//                         <ul>
//                             <Link href="/home"><li>Home</li></Link>
//                             <li>About</li>
//                             <Link href="/facilitator"><li>Partners</li></Link>
//                             <li>Programs</li>
//                             <Link href="/testimonials"><li>Testimonials</li></Link>
//                         </ul>
//                     </div>
//                     <div id="rightMenu">

//                                         {pathname === "/contact" ? (
//                         <span className="text-indigo-400  opacity-0">
//                             Contact
//                         </span>
//                         ) : (
//                             <Link href="/contact" className="contact" >Contact</Link>
                        
//                         )}
//                     </div>
//                 </header>
//   );
// }


"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./header.css";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/facilitator", label: "Partners" },
    { href: "/articles", label: "Programs" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header>
      <div id="leftMenu">
        <ul>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${
                  pathname === href ? "active-link" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div id="rightMenu">
        {pathname === "/contact" ? (
           <span className="opacity-0">
            Contact
          </span>
        ) : (
          <Link href="/contact" className="contact">
            Contact
          </Link>
        )}
      </div>
    </header>
  );
}
