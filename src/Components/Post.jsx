import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }){

    const publishedDateFormatted = format(publishedAt, "MMMM dd 'at' hh:mm a")

    // const publishedDateFormatted = format(publishedAt, "MMMM dd 'at' hh:mm a", {
    //     locale: ptBR,
    // })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        addSuffix: true
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src= {author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow} 
                </time>

            </header>

            <div className={styles.content}>
                {content.map( item => {
                    if (item.type === 'paragraph') {
                        return <p>{item.content}</p>
                    } else if (item.type === 'link') {
                        return <p><a href="#">{item.content}</a></p>
                    }
                })}
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

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>


        </article>
    )
}

