import styles from './Article.module.css'


export default function Article (){
    return (
       <div className={styles.Article}>
         <div className={styles.blogContent}>
            <p className={styles.date}>11/12/20</p>
            <p className={styles.blogTitle}>On the Street in Brooklyn</p>
            <img src="https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-1.jpg" />
            <article>
                <p>
                Cray ipsum, dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium, harum repudiandae dignissimos a unde.  dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium, harum repudiandae dignissimos.  dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium qui accusantium, harum repudiandae dignissimos.  dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium.
                </p>
            </article>
            <p className={styles.Continues}>Continues ...</p>
            </div>

            
            <div className={styles.blogContent}>
                <p className={styles.date}>11/12/20</p>
                <p className={styles.blogTitle}>Vintage in Vogue</p>
                <img src="https://ps-rtt-sei.herokuapp.com/fashionblog/blog-image-2.jpg" />
            <article>
                <p>
                Selfies sunt, dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium, harum repudiandae dignissimos.  dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium, harum repudiandae dignissimos dolor sit amet consectetur adipisicing elit qui accusantium, harum repudiandae dignissimos.  dolor sit amet consectetur adipisicing elit. Dicta commodi, tempore id optio neque assumenda vel autem laudantium esse itaque nesciunt facilis sunt qui accusantium, harum repu.
                </p>
            </article>
            <p className={styles.Continues}>Continues ...</p>
            </div>
            
       </div>

    )
}