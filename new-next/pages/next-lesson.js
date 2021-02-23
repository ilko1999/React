import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default () => (
    <>
        <div className = {styles.container}>
            <p> <b> Next. js </b> is a JavaScript framework created by <b>Zeit</b>.

It lets you build server-side rendering and static web applications using <b>React</b>. It's a great tool to build your next website. It has many great features and advantages, which can make Nextjs your first option for building your next web application.</p>
                <Link href = '/'>
                    <a><b>Go back to the menu!</b></a>
                </Link>
        </div>

        

    </>
);