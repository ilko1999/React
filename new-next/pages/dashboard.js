import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Dashboard = () => {
    const [globalMessage, setGlobalMessage] = useState('');
    const [userData, setuserData] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const getUsername = async () => {
            if (router.query?.username) {
                const res = await fetch(
                    `https://api.github.com/users/${router.query?.username}`,
                );
                const user = await res.json();
                if (user && user?._id) {
                    setuserData(user);
                } else if (
                    user.message &&
                    user.message.includes('rate limit exceeded')
                ) {
                    setGlobalMessage(user.message);
                }
            }
        };
        getUsername();
    }, [userData, router, router.query?.username]);

    return (
        <div className={styles.container}>
            {!userData && !globalMessage ? (
                <p>Can not find user!</p>
            ) : (
                <p>{globalMessage}</p>
            )}
            {userData && (
                <>
                    <img src={userData?.avatar_url} alt="Test" />
                    <h1>{userData?.name}</h1>
                    <p>{userData?.bio}</p>
                </>
            )}
        </div>
    );
};

export default Dashboard;
