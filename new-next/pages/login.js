import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/Home.module.css';

const Login = () => {
    const [username, setUsername] = React.useState('');

    const router = useRouter();
    const onLogin = (e) => {
        e.preventDefault();
        router.push(`/dashboard?username=${username}`);
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.card}
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className={styles.card}
                type="password"
                placeholder="password"
            />
            <button className={styles.card} onClick={onLogin} type="button">
                Submit!
            </button>
        </div>
    );
};

export default Login;
