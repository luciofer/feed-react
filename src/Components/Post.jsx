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
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="#"> jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>

        </article>
    )
}