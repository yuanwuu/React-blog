import Nav from "./Nav"
import style from "./Footer.module.css"

export default function Footer () {
    const NavList = ["Home","women's","Mens's","On the Street", "The Catwalk","AdWatch","About","Tips"]

    return (
        <div>
            <Nav list= {NavList} />
            <p className="copyright">© 2013 Valet Industries, Inc</p>
        </div>
    )
}