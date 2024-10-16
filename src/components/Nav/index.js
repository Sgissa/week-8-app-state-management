import navStyles from "./nav.module.css"


export default function Nav(){
    return(
        <nav className={navStyles.mainNav}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>      
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>
    )
}