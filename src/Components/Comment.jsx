import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content }){

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://media.licdn.com/dms/image/D4D03AQFUIaMMNRQG7Q/profile-displayphoto-shrink_800_800/0/1686611375662?e=1707350400&v=beta&t=EYdp8K0HfBGLqEKPVM46M9Wggj57QMAmTYAzAEkJJ6g" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>John Doe</strong>
                            <time title='December 7, 2023 at 11:49 PM' dateTime='2023-12-07 11:49:30'> 5 min ago </time>
                        </div>

                        <button title='Delete comment'>
                            <Trash size={22} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Like <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )

}