import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const AboutPage = () => (
    <>
        <div className={styles.container}>
            <p>
                Nostrud Lorem laboris velit nulla voluptate. Adipisicing laboris
                labore nostrud enim ex aliqua. Qui nisi incididunt officia
                aliqua commodo id. Consequat tempor Lorem est Lorem sit
                adipisicing cillum adipisicing ex reprehenderit occaecat ex.
                Consectetur proident sint minim cupidatat ad ullamco tempor ad
                dolor Lorem minim. Pariatur quis esse consectetur qui cillum in
                commodo. Ipsum irure proident commodo aute officia anim minim
                mollit.
            </p>

            <Link href="/">
                <a>
                    <b>Go back to the menu!</b>
                </a>
            </Link>
        </div>
    </>
);

export default AboutPage;
