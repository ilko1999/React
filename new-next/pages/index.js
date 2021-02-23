import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Header() {
  return (
    <header className={styles.container}>
      <ul>
          <li>
            <Link href = "/github">
              <a>Go to my GitHub account!</a>
            </Link>
          </li>

          <li>
            <Link href = "/about">
              <a>Learn More About MEEEE!</a>
            </Link>
          </li>

          <li>
            <Link href = "/next-lesson">
              <a>What is Next.js!</a>
            </Link>
          </li>

          <li>
            <Link as = "/post/1" href = "/post/[id]">
              <a>FIrst Post!</a>
            </Link>
          </li>

          <li>
            <Link as = "/post/2" href = "/post/[id]">
              <a>Second Post!</a>
            </Link>
          </li>

          <li>
            <Link href = "/login">
              <a>Login!</a>
            </Link>
          </li>
      </ul>
      
    </header>
  )
};
