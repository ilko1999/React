import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default () => (
    <>
        <div className = {styles.container}>
            <p>ilko1999 👨‍💻</p>
                <Link href = '/'>
                <a><b>Go back to the menu!</b></a>
            </Link>
        </div>

        

    </>
);