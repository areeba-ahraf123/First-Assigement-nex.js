import styles from './home.module.css';

export default function HomePage(){
    return(
        <div>
            
            <h1 className={styles.heading}><b>WELCOME TO OUR WEBSITE</b></h1>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Distinctio doloremque sed quas, voluptas id minus ratione nulla eius qui. 
                Vero magni praesentium rerum sapiente quibusdam sit dicta voluptatibus quo animi.
            </p>
        </div>
    )
}