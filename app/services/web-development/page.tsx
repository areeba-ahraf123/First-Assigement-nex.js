import styles from'./web-development.module.css'
import Link from "next/link";

export default function Services(){
    return(
        <div>
            
            <Link href="/services"><h1 className={styles.heading}><b>Go to our available services</b></h1>
             </Link>
             <img src='https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg'width={700}height={300}></img>
            
        </div>
    );
}