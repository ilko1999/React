import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

const Post = ({title, body}) => (
        <div className = {styles.container}>


        <h1>{title}</h1>
        <p>{body}</p>
            <Link href = '/'>
                <a><b>Go back to the menu!</b></a>
            </Link>
        </div>
    );

Post.getInitialProps = async ({query}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    const post = res.json();
    return post;
}

export default Post;
