import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQHpQ13Iz9Ps0w/profile-displayphoto-shrink_800_800/0/1692132894255?e=1707350400&v=beta&t=mzgF0v59NcabLRk_aYK0-s9qhtB6GVpbfwSuIFaAljw" />
                    <div className={styles.authorInfo}>
                        <strong>Lucio Araujo</strong>
                        <span>Software Developer</span>
                    </div>
                </div>

                <time title='December 7, 2023 at 11:49 PM' dateTime='2023-12-07 11:49:30'>Published 1 hour ago </time>
            </header>

            <div className={styles.content}>
                <p>Hey there 👋</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestias sint numquam quidem, corporis, ipsa magni ducimus vel pariatur officia architecto maiores nostrum voluptas nisi non voluptates animi consectetur adipisci. 🚀</p>
                <p><a href="#"> lf.dev/newproject</a></p>
                <p>
                    <a href="#">#newproject</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong> Leave a comment!</strong>
                <textarea 
                    placeholder='Send a comment...'
                />
                <footer>
                    <button type='submit'>Publish</button>
                </footer>
            </form>

        </article>
    )
}

