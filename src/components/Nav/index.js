import navStyles from "./nav.module.css"
import Link from "next/link"


export default function Nav(){
    return(
        <nav className={navStyles.mainNav}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>      
                <li><Link href='/'>Contact</Link></li>
            </ul>
        </nav>
    )
}