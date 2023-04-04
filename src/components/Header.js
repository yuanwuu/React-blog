import Nav from './Nav'
import styles from './Header.module.css'

export default function Header() {
    // const pages = [
    //     "Women's","Mens's","On the Street", "The Catwalk","AdWatch","About"
    // ]

    return (
        // using css module method, it generates a unique id e[ex:Header_Header__LjbK+]
        <header className={styles.Header}> 
            <h1>Sartre's List</h1>
            <h2>Better-Dressed People</h2>
            <Nav list={["Women's","Mens's","On the Street", "The Catwalk","AdWatch","About"]} />
            
        </header>
    )
}