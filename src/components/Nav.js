import styles from './List.module.css'
export default function Nav (props) {
// props at line 2 takes the value from Footer.js >> <Nav test = 'test1' list= {NavList} />    
    // props.test  
    // console.log (props.list)
    return (
        <div className ={styles.Header} aria-label="Mian Navigation" role="navigation">
            <ul>
                {/* map() loops through each element and create a new array, putting it in the <li></li> to print it out as output   */}
                {props.list.map((arrayElement)=> {
                    return <li>{arrayElement}</li>
                })} 
               
            </ul>
        </div>
    )
}